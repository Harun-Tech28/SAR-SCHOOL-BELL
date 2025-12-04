import type { Student } from "./store"
import { useStore } from "./store"

export interface StudentCallRequest {
  id: string
  studentId: string
  studentName: string
  message: string
  timestamp: number
  status: 'pending' | 'called' | 'completed' | 'cancelled'
  priority: 'low' | 'normal' | 'high' | 'urgent'
  requestedBy: string
  location?: string
  reason?: string
}

export interface StudentSearchResult {
  student: Student
  matchScore: number
  matchedFields: string[]
}

export class StudentManager {
  private store = useStore.getState()

  // Add a new student to the system
  addStudent(studentData: {
    firstName: string
    lastName: string
    class?: string
    studentId?: string
    phoneNumber?: string
    parentContact?: string
    address?: string
    emergencyContact?: string
  }): Student {
    const newStudent: Student = {
      id: studentData.studentId || this.generateStudentId(),
      firstName: studentData.firstName.trim(),
      lastName: studentData.lastName.trim(),
      class: studentData.class?.trim(),
      // Additional fields can be stored in a metadata object if needed
      ...(studentData.phoneNumber && { phoneNumber: studentData.phoneNumber }),
      ...(studentData.parentContact && { parentContact: studentData.parentContact }),
      ...(studentData.address && { address: studentData.address }),
      ...(studentData.emergencyContact && { emergencyContact: studentData.emergencyContact })
    }

    // Validate student data
    const validation = this.validateStudent(newStudent)
    if (!validation.valid) {
      throw new Error(`Invalid student data: ${validation.errors.join(', ')}`)
    }

    // Check for duplicates
    const existingStudent = this.findStudentByName(newStudent.firstName, newStudent.lastName)
    if (existingStudent) {
      throw new Error(`Student ${newStudent.firstName} ${newStudent.lastName} already exists`)
    }

    // Add to store
    this.store.addStudent(newStudent)
    
    console.log(`[StudentManager] Added student: ${newStudent.firstName} ${newStudent.lastName} (ID: ${newStudent.id})`)
    
    return newStudent
  }

  // Remove a student from the system
  removeStudent(studentId: string): boolean {
    const student = this.findStudentById(studentId)
    if (!student) {
      console.warn(`[StudentManager] Student with ID ${studentId} not found`)
      return false
    }

    // Remove from store
    this.store.removeStudent(studentId)
    
    console.log(`[StudentManager] Removed student: ${student.firstName} ${student.lastName} (ID: ${studentId})`)
    
    return true
  }

  // Remove student by name
  removeStudentByName(firstName: string, lastName: string): boolean {
    const student = this.findStudentByName(firstName, lastName)
    if (!student) {
      console.warn(`[StudentManager] Student ${firstName} ${lastName} not found`)
      return false
    }

    return this.removeStudent(student.id)
  }

  // Find student by ID
  findStudentById(studentId: string): Student | null {
    const students = this.store.students
    return students.find(student => student.id === studentId) || null
  }

  // Find student by name
  findStudentByName(firstName: string, lastName: string): Student | null {
    const students = this.store.students
    return students.find(student => 
      student.firstName.toLowerCase() === firstName.toLowerCase() &&
      student.lastName.toLowerCase() === lastName.toLowerCase()
    ) || null
  }

  // Search students with fuzzy matching
  searchStudents(query: string, limit: number = 10): StudentSearchResult[] {
    const students = this.store.students
    const results: StudentSearchResult[] = []

    const queryLower = query.toLowerCase().trim()
    if (!queryLower) return results

    for (const student of students) {
      const matchScore = this.calculateMatchScore(student, queryLower)
      if (matchScore > 0) {
        const matchedFields = this.getMatchedFields(student, queryLower)
        results.push({
          student,
          matchScore,
          matchedFields
        })
      }
    }

    // Sort by match score (highest first) and limit results
    return results
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, limit)
  }

  // Get all students in a specific class
  getStudentsByClass(className: string): Student[] {
    const students = this.store.students
    return students.filter(student => 
      student.class?.toLowerCase() === className.toLowerCase()
    )
  }

  // Get all unique class names
  getAllClasses(): string[] {
    const students = this.store.students
    const classes = new Set<string>()
    
    students.forEach(student => {
      if (student.class) {
        classes.add(student.class)
      }
    })
    
    return Array.from(classes).sort()
  }

  // Create a call request for a student
  createCallRequest(
    studentId: string,
    message: string,
    options: {
      priority?: 'low' | 'normal' | 'high' | 'urgent'
      requestedBy?: string
      location?: string
      reason?: string
    } = {}
  ): StudentCallRequest {
    const student = this.findStudentById(studentId)
    if (!student) {
      throw new Error(`Student with ID ${studentId} not found`)
    }

    const callRequest: StudentCallRequest = {
      id: this.generateCallRequestId(),
      studentId,
      studentName: `${student.firstName} ${student.lastName}`,
      message,
      timestamp: Date.now(),
      status: 'pending',
      priority: options.priority || 'normal',
      requestedBy: options.requestedBy || 'System',
      location: options.location,
      reason: options.reason
    }

    console.log(`[StudentManager] Created call request for ${student.firstName} ${student.lastName}: ${message}`)
    
    return callRequest
  }

  // Generate personalized announcement for student
  generateStudentAnnouncement(
    studentId: string,
    messageType: 'office' | 'parent_waiting' | 'pickup' | 'custom',
    customMessage?: string,
    location?: string
  ): string {
    const student = this.findStudentById(studentId)
    if (!student) {
      throw new Error(`Student with ID ${studentId} not found`)
    }

    const studentName = `${student.firstName} ${student.lastName}`
    const classInfo = student.class ? ` from ${student.class}` : ''

    const messages = {
      office: `${studentName}${classInfo}, please report to the office immediately.`,
      parent_waiting: `${studentName}${classInfo}, your parent is waiting for you at the main gate.`,
      pickup: `${studentName}${classInfo}, please come to the ${location || 'main office'} for pickup.`,
      custom: customMessage || `${studentName}${classInfo}, please report to the office.`
    }

    return messages[messageType]
  }

  // Batch operations
  addMultipleStudents(studentsData: Array<{
    firstName: string
    lastName: string
    class?: string
    studentId?: string
  }>): { added: Student[], errors: Array<{ data: any, error: string }> } {
    const added: Student[] = []
    const errors: Array<{ data: any, error: string }> = []

    for (const studentData of studentsData) {
      try {
        const student = this.addStudent(studentData)
        added.push(student)
      } catch (error) {
        errors.push({
          data: studentData,
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      }
    }

    console.log(`[StudentManager] Batch add completed: ${added.length} added, ${errors.length} errors`)
    
    return { added, errors }
  }

  removeMultipleStudents(studentIds: string[]): { removed: string[], notFound: string[] } {
    const removed: string[] = []
    const notFound: string[] = []

    for (const studentId of studentIds) {
      if (this.removeStudent(studentId)) {
        removed.push(studentId)
      } else {
        notFound.push(studentId)
      }
    }

    console.log(`[StudentManager] Batch remove completed: ${removed.length} removed, ${notFound.length} not found`)
    
    return { removed, notFound }
  }

  // Validation
  private validateStudent(student: Student): { valid: boolean, errors: string[] } {
    const errors: string[] = []

    if (!student.firstName || student.firstName.trim().length === 0) {
      errors.push('First name is required')
    }

    if (!student.lastName || student.lastName.trim().length === 0) {
      errors.push('Last name is required')
    }

    if (student.firstName && student.firstName.length > 50) {
      errors.push('First name is too long (max 50 characters)')
    }

    if (student.lastName && student.lastName.length > 50) {
      errors.push('Last name is too long (max 50 characters)')
    }

    if (student.class && student.class.length > 20) {
      errors.push('Class name is too long (max 20 characters)')
    }

    return {
      valid: errors.length === 0,
      errors
    }
  }

  // Helper methods
  private calculateMatchScore(student: Student, query: string): number {
    let score = 0

    // Exact matches get highest score
    if (student.firstName.toLowerCase() === query) score += 100
    if (student.lastName.toLowerCase() === query) score += 100
    if (student.id.toLowerCase() === query) score += 100

    // Partial matches
    if (student.firstName.toLowerCase().includes(query)) score += 50
    if (student.lastName.toLowerCase().includes(query)) score += 50
    if (student.class?.toLowerCase().includes(query)) score += 30

    // Full name match
    const fullName = `${student.firstName} ${student.lastName}`.toLowerCase()
    if (fullName.includes(query)) score += 70

    return score
  }

  private getMatchedFields(student: Student, query: string): string[] {
    const matched: string[] = []

    if (student.firstName.toLowerCase().includes(query)) matched.push('firstName')
    if (student.lastName.toLowerCase().includes(query)) matched.push('lastName')
    if (student.id.toLowerCase().includes(query)) matched.push('id')
    if (student.class?.toLowerCase().includes(query)) matched.push('class')

    return matched
  }

  private generateStudentId(): string {
    const timestamp = Date.now().toString(36)
    const random = Math.random().toString(36).substr(2, 5)
    return `STU-${timestamp}-${random}`.toUpperCase()
  }

  private generateCallRequestId(): string {
    const timestamp = Date.now().toString(36)
    const random = Math.random().toString(36).substr(2, 5)
    return `CALL-${timestamp}-${random}`.toUpperCase()
  }

  // Statistics and reporting
  getStudentStatistics(): {
    totalStudents: number
    studentsByClass: Record<string, number>
    recentlyAdded: Student[]
    oldestStudents: Student[]
  } {
    const students = this.store.students
    const studentsByClass: Record<string, number> = {}

    // Count students by class
    students.forEach(student => {
      if (student.class) {
        studentsByClass[student.class] = (studentsByClass[student.class] || 0) + 1
      }
    })

    // Sort students by ID (assuming newer IDs are larger)
    const sortedStudents = [...students].sort((a, b) => b.id.localeCompare(a.id))

    return {
      totalStudents: students.length,
      studentsByClass,
      recentlyAdded: sortedStudents.slice(0, 5),
      oldestStudents: sortedStudents.slice(-5).reverse()
    }
  }

  // Export/Import functionality
  exportStudents(): string {
    const students = this.store.students
    return JSON.stringify(students, null, 2)
  }

  importStudents(jsonData: string): { imported: number, errors: string[] } {
    try {
      const studentsData = JSON.parse(jsonData)
      if (!Array.isArray(studentsData)) {
        throw new Error('Invalid data format: expected array of students')
      }

      const result = this.addMultipleStudents(studentsData)
      return {
        imported: result.added.length,
        errors: result.errors.map(e => e.error)
      }
    } catch (error) {
      return {
        imported: 0,
        errors: [error instanceof Error ? error.message : 'Unknown error']
      }
    }
  }
}

// Global student manager instance
let studentManagerInstance: StudentManager | null = null

export const getStudentManager = (): StudentManager => {
  if (!studentManagerInstance) {
    studentManagerInstance = new StudentManager()
  }
  return studentManagerInstance
}

// Convenience functions for common operations
export const addStudent = (studentData: {
  firstName: string
  lastName: string
  class?: string
  studentId?: string
}): Student => {
  const manager = getStudentManager()
  return manager.addStudent(studentData)
}

export const removeStudent = (studentId: string): boolean => {
  const manager = getStudentManager()
  return manager.removeStudent(studentId)
}

export const findStudent = (query: string): Student | null => {
  const manager = getStudentManager()
  const results = manager.searchStudents(query, 1)
  return results.length > 0 ? results[0].student : null
}

export const callStudent = async (
  studentId: string,
  message: string,
  options?: {
    voice?: any
    language?: any
    priority?: 'low' | 'normal' | 'high' | 'urgent'
  }
): Promise<boolean> => {
  const manager = getStudentManager()
  const student = manager.findStudentById(studentId)
  
  if (!student) {
    console.error(`[StudentManager] Student with ID ${studentId} not found`)
    return false
  }

  // Import voice utilities
  const { playTextToSpeech } = require('./voice-utils')
  
  // Create announcement
  const announcement = `Attention: ${student.firstName} ${student.lastName}${student.class ? ` from ${student.class}` : ''}, ${message}`
  
  // Play announcement
  try {
    const success = await playTextToSpeech(
      announcement,
      options?.voice || 'standard-male',
      options?.language || 'english'
    )
    
    if (success) {
      console.log(`[StudentManager] Successfully called ${student.firstName} ${student.lastName}`)
    } else {
      console.error(`[StudentManager] Failed to call ${student.firstName} ${student.lastName}`)
    }
    
    return success
  } catch (error) {
    console.error(`[StudentManager] Error calling student:`, error)
    return false
  }
}