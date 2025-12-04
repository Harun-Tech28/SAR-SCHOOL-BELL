/**
 * Audio Storage using IndexedDB
 * Stores custom audio files for timetables and prayer bells
 */

const DB_NAME = 'SchoolBellAudioDB'
const DB_VERSION = 1
const STORE_NAME = 'audioFiles'

export interface AudioMetadata {
    id: string
    name: string
    fileName: string
    fileSize: number
    duration: number
    uploadDate: string
    mimeType: string
    category: 'timetable' | 'prayer' | 'general'
}

export interface StoredAudio extends AudioMetadata {
    audioBlob: Blob
}

class AudioStorageDB {
    private db: IDBDatabase | null = null

    async init(): Promise<void> {
        if (this.db) return

        return new Promise((resolve, reject) => {
            console.log('[AudioStorage] Opening IndexedDB...')
            const request = indexedDB.open(DB_NAME, DB_VERSION)

            request.onerror = () => {
                console.error('[AudioStorage] DB Open Error:', request.error)
                reject(request.error)
            }
            request.onsuccess = () => {
                console.log('[AudioStorage] DB Opened Successfully')
                this.db = request.result
                resolve()
            }

            request.onupgradeneeded = (event) => {
                console.log('[AudioStorage] DB Upgrade Needed')
                const db = (event.target as IDBOpenDBRequest).result

                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    const objectStore = db.createObjectStore(STORE_NAME, { keyPath: 'id' })
                    objectStore.createIndex('category', 'category', { unique: false })
                    objectStore.createIndex('uploadDate', 'uploadDate', { unique: false })
                }
            }
        })
    }

    async saveAudio(file: File, category: 'timetable' | 'prayer' | 'general'): Promise<AudioMetadata> {
        console.log(`[AudioStorage] Saving audio: ${file.name}, size: ${file.size}, type: ${file.type}`)
        if (!this.db) await this.init()

        const id = `audio_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

        // Get audio duration
        const duration = await this.getAudioDuration(file)

        const metadata: AudioMetadata = {
            id,
            name: file.name.replace(/\.[^/.]+$/, ''), // Remove extension
            fileName: file.name,
            fileSize: file.size,
            duration,
            uploadDate: new Date().toISOString(),
            mimeType: file.type,
            category
        }

        const storedAudio: StoredAudio = {
            ...metadata,
            audioBlob: file
        }

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction([STORE_NAME], 'readwrite')
            const objectStore = transaction.objectStore(STORE_NAME)
            const request = objectStore.add(storedAudio)

            request.onsuccess = () => resolve(metadata)
            request.onerror = () => reject(request.error)
        })
    }

    async getAudio(id: string): Promise<StoredAudio | null> {
        if (!this.db) await this.init()

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction([STORE_NAME], 'readonly')
            const objectStore = transaction.objectStore(STORE_NAME)
            const request = objectStore.get(id)

            request.onsuccess = () => resolve(request.result || null)
            request.onerror = () => reject(request.error)
        })
    }

    async listAudios(category?: 'timetable' | 'prayer' | 'general'): Promise<AudioMetadata[]> {
        if (!this.db) await this.init()

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction([STORE_NAME], 'readonly')
            const objectStore = transaction.objectStore(STORE_NAME)

            let request: IDBRequest
            if (category) {
                const index = objectStore.index('category')
                request = index.getAll(category)
            } else {
                request = objectStore.getAll()
            }

            request.onsuccess = () => {
                const audios = request.result.map((audio: StoredAudio) => {
                    const { audioBlob, ...metadata } = audio
                    return metadata
                })
                resolve(audios)
            }
            request.onerror = () => reject(request.error)
        })
    }

    async deleteAudio(id: string): Promise<void> {
        if (!this.db) await this.init()

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction([STORE_NAME], 'readwrite')
            const objectStore = transaction.objectStore(STORE_NAME)
            const request = objectStore.delete(id)

            request.onsuccess = () => resolve()
            request.onerror = () => reject(request.error)
        })
    }

    async exportAll(): Promise<Blob> {
        if (!this.db) await this.init()

        const audios = await new Promise<StoredAudio[]>((resolve, reject) => {
            const transaction = this.db!.transaction([STORE_NAME], 'readonly')
            const objectStore = transaction.objectStore(STORE_NAME)
            const request = objectStore.getAll()

            request.onsuccess = () => resolve(request.result)
            request.onerror = () => reject(request.error)
        })

        // Create a JSON structure with base64 encoded audio
        const exportData = await Promise.all(
            audios.map(async (audio) => {
                const arrayBuffer = await audio.audioBlob.arrayBuffer()
                const base64 = this.arrayBufferToBase64(arrayBuffer)

                return {
                    metadata: {
                        id: audio.id,
                        name: audio.name,
                        fileName: audio.fileName,
                        fileSize: audio.fileSize,
                        duration: audio.duration,
                        uploadDate: audio.uploadDate,
                        mimeType: audio.mimeType,
                        category: audio.category
                    },
                    audioData: base64
                }
            })
        )

        const jsonString = JSON.stringify({ version: 1, audios: exportData }, null, 2)
        return new Blob([jsonString], { type: 'application/json' })
    }

    async importAll(file: File): Promise<number> {
        if (!this.db) await this.init()

        const text = await file.text()
        const data = JSON.parse(text)

        if (data.version !== 1 || !Array.isArray(data.audios)) {
            throw new Error('Invalid export file format')
        }

        let imported = 0
        for (const item of data.audios) {
            try {
                const arrayBuffer = this.base64ToArrayBuffer(item.audioData)
                const blob = new Blob([arrayBuffer], { type: item.metadata.mimeType })

                const storedAudio: StoredAudio = {
                    ...item.metadata,
                    audioBlob: blob
                }

                await new Promise<void>((resolve, reject) => {
                    const transaction = this.db!.transaction([STORE_NAME], 'readwrite')
                    const objectStore = transaction.objectStore(STORE_NAME)
                    const request = objectStore.put(storedAudio)

                    request.onsuccess = () => resolve()
                    request.onerror = () => reject(request.error)
                })

                imported++
            } catch (error) {
                console.error('Failed to import audio:', item.metadata.name, error)
            }
        }

        return imported
    }

    private async getAudioDuration(file: File): Promise<number> {
        return new Promise((resolve) => {
            const audio = new Audio()
            const url = URL.createObjectURL(file)

            audio.onloadedmetadata = () => {
                URL.revokeObjectURL(url)
                resolve(audio.duration)
            }

            audio.onerror = () => {
                URL.revokeObjectURL(url)
                resolve(0)
            }

            audio.src = url
        })
    }

    private arrayBufferToBase64(buffer: ArrayBuffer): string {
        const bytes = new Uint8Array(buffer)
        let binary = ''
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i])
        }
        return btoa(binary)
    }

    private base64ToArrayBuffer(base64: string): ArrayBuffer {
        const binary = atob(base64)
        const bytes = new Uint8Array(binary.length)
        for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i)
        }
        return bytes.buffer
    }
}

// Singleton instance
export const audioStorage = new AudioStorageDB()

// Helper function to play audio from storage
export async function playStoredAudio(audioId: string): Promise<boolean> {
    try {
        const storedAudio = await audioStorage.getAudio(audioId)
        if (!storedAudio) {
            console.error('[AudioStorage] Audio not found:', audioId)
            return false
        }

        const url = URL.createObjectURL(storedAudio.audioBlob)
        const audio = new Audio(url)

        return new Promise((resolve) => {
            audio.onended = () => {
                URL.revokeObjectURL(url)
                resolve(true)
            }

            audio.onerror = () => {
                URL.revokeObjectURL(url)
                resolve(false)
            }

            audio.play().catch(() => resolve(false))
        })
    } catch (error) {
        console.error('[AudioStorage] Playback error:', error)
        return false
    }
}
