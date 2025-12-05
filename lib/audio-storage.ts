/**
 * Audio Storage System
 * Handles storing and retrieving custom audio files using IndexedDB
 */

import { openDB, type IDBPDatabase } from 'idb'

const DB_NAME = 'school-bell-audio'
const DB_VERSION = 1
const AUDIO_STORE = 'audio-files'

export interface AudioMetadata {
  id: string
  name: string
  type: string // MIME type
  size: number
  duration?: number
  uploadedAt: number
  category?: 'prayer' | 'bell' | 'announcement' | 'other'
}

export interface StoredAudio extends AudioMetadata {
  data: Blob
}

class AudioStorage {
  private dbPromise: Promise<IDBPDatabase> | null = null

  private async getDB(): Promise<IDBPDatabase> {
    if (!this.dbPromise) {
      this.dbPromise = openDB(DB_NAME, DB_VERSION, {
        upgrade(db) {
          if (!db.objectStoreNames.contains(AUDIO_STORE)) {
            const store = db.createObjectStore(AUDIO_STORE, { keyPath: 'id' })
            store.createIndex('category', 'category', { unique: false })
            store.createIndex('uploadedAt', 'uploadedAt', { unique: false })
          }
        },
      })
    }
    return this.dbPromise
  }

  /**
   * Store an audio file
   */
  async storeAudio(file: File, category?: AudioMetadata['category']): Promise<AudioMetadata> {
    const db = await this.getDB()
    
    // Get audio duration if possible
    const duration = await this.getAudioDuration(file)
    
    const metadata: AudioMetadata = {
      id: `audio-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: file.name,
      type: file.type,
      size: file.size,
      duration,
      uploadedAt: Date.now(),
      category: category || 'other',
    }

    const storedAudio: StoredAudio = {
      ...metadata,
      data: file,
    }

    await db.put(AUDIO_STORE, storedAudio)
    return metadata
  }

  /**
   * Get audio file by ID
   */
  async getAudio(id: string): Promise<StoredAudio | undefined> {
    const db = await this.getDB()
    return db.get(AUDIO_STORE, id)
  }

  /**
   * Get audio URL for playback
   */
  async getAudioURL(id: string): Promise<string | null> {
    const audio = await this.getAudio(id)
    if (!audio) return null
    return URL.createObjectURL(audio.data)
  }

  /**
   * List all audio files
   */
  async listAudios(category?: AudioMetadata['category']): Promise<AudioMetadata[]> {
    const db = await this.getDB()
    
    if (category) {
      const index = db.transaction(AUDIO_STORE).store.index('category')
      const audios = await index.getAll(category)
      return audios.map(({ data, ...metadata }) => metadata)
    }
    
    const audios = await db.getAll(AUDIO_STORE)
    return audios.map(({ data, ...metadata }) => metadata)
  }

  /**
   * Delete audio file
   */
  async deleteAudio(id: string): Promise<void> {
    const db = await this.getDB()
    await db.delete(AUDIO_STORE, id)
  }

  /**
   * Get total storage size
   */
  async getTotalSize(): Promise<number> {
    const audios = await this.listAudios()
    return audios.reduce((total, audio) => total + audio.size, 0)
  }

  /**
   * Clear all audio files
   */
  async clearAll(): Promise<void> {
    const db = await this.getDB()
    await db.clear(AUDIO_STORE)
  }

  /**
   * Get audio duration from file
   */
  private getAudioDuration(file: File): Promise<number | undefined> {
    return new Promise((resolve) => {
      const audio = new Audio()
      const url = URL.createObjectURL(file)
      
      audio.addEventListener('loadedmetadata', () => {
        URL.revokeObjectURL(url)
        resolve(audio.duration)
      })
      
      audio.addEventListener('error', () => {
        URL.revokeObjectURL(url)
        resolve(undefined)
      })
      
      audio.src = url
    })
  }
}

// Export singleton instance
export const audioStorage = new AudioStorage()

/**
 * Play stored audio by ID
 * Returns a promise that resolves to true if playback was successful
 */
export async function playStoredAudio(audioId: string): Promise<boolean> {
  try {
    const url = await audioStorage.getAudioURL(audioId)
    if (!url) {
      console.error(`[AudioStorage] Audio not found: ${audioId}`)
      return false
    }

    return new Promise((resolve) => {
      const audio = new Audio(url)
      
      audio.addEventListener('ended', () => {
        URL.revokeObjectURL(url)
        resolve(true)
      })
      
      audio.addEventListener('error', (error) => {
        console.error(`[AudioStorage] Error playing audio ${audioId}:`, error)
        URL.revokeObjectURL(url)
        resolve(false)
      })
      
      audio.play().catch((error) => {
        console.error(`[AudioStorage] Failed to play audio ${audioId}:`, error)
        URL.revokeObjectURL(url)
        resolve(false)
      })
    })
  } catch (error) {
    console.error(`[AudioStorage] Exception playing audio ${audioId}:`, error)
    return false
  }
}
