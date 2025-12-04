"use client"

import type React from "react"

import { useState } from "react"
import { useStore } from "@/lib/store"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, Plus } from "lucide-react"

export function Students() {
  const { students, addStudent, removeStudent } = useStore()
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    class: "",
    useCustomClass: false,
  })
  const [searchTerm, setSearchTerm] = useState("")

  const classes = [
    "JHS 1 Blue",
    "JHS 1 Green",
    "JHS 1 Red",
    "JHS 2 Blue",
    "JHS 2 Green",
    "JHS 2 Red",
    "JHS 3 Blue",
    "JHS 3 Green",
    "JHS 3 Red",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.firstName || !formData.lastName) return

    addStudent({
      id: Date.now().toString(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      class: formData.class || undefined,
    })

    setFormData({ firstName: "", lastName: "", class: "", useCustomClass: false })
    setShowForm(false)
  }

  const filteredStudents = students.filter((s) =>
    `${s.firstName} ${s.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Students</h1>
          <p className="text-foreground/60">Manage student database</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
          <Plus className="w-4 h-4" />
          Add Student
        </Button>
      </div>

      <div className="mb-6">
        <Input placeholder="Search by name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      {showForm && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">First Name</label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="First name"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">Last Name</label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <input
                    type="checkbox"
                    id="useCustom"
                    checked={formData.useCustomClass}
                    onChange={(e) => setFormData({ ...formData, useCustomClass: e.target.checked, class: "" })}
                    className="w-4 h-4"
                  />
                  <label htmlFor="useCustom" className="text-sm font-semibold text-foreground">
                    Use custom class name
                  </label>
                </div>

                {formData.useCustomClass ? (
                  <Input
                    value={formData.class}
                    onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                    placeholder="e.g., Form 2A, Grade 7, Senior 2"
                  />
                ) : (
                  <select
                    value={formData.class}
                    onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                    className="w-full p-2 border border-border rounded-lg bg-background"
                  >
                    <option value="">Select class (optional)</option>
                    {classes.map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                  Add Student
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStudents.length === 0 ? (
          <Card className="col-span-full">
            <CardContent className="pt-6 text-center text-foreground/60">No students found.</CardContent>
          </Card>
        ) : (
          filteredStudents.map((student) => (
            <Card key={student.id}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {student.firstName} {student.lastName}
                    </h3>
                    {student.class && <p className="text-sm text-foreground/60">{student.class}</p>}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeStudent(student.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
