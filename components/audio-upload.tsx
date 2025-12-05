"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/card"
import { Upload, Trash2, Play, Pause, Music } from "lucide-react"
import { audioStorage, type AudioMetadata } from "@/lib/audio-storage"

export function AudioUpload() {
  const [audios, setAudios] = useState<AudioMetadata[]>([])
  const [uploading, setUploading] = useState(false)
  const [playingId, setPlayingId] = useState<string | null>(null)
  const [totalSize, setTotalSize] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    loadAudios()
  }, [])

  const loadAudios = async () => {
    const audioList = await audioStorage.listAudios()
    setAudios(audioList)
    const size = await audioStorage.getTotalSize()
    setTotalSize(size)
  }

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    setUploading(true)
    try {
      for (const file of Array.from(files)) {
        // Validate file type
        if (!file.type.startsWith('audio/')) {
          alert(`${file.name} is not an audio file`)
          continue
        }

        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
          alert(`${file.name} is too large (max 10MB)`)
          continue
        }

        await audioStorage.storeAudio(file, 'prayer')
      }
      
      await loadAudios()
      alert('Audio files uploaded successfully!')
    } catch (error) {
      console.error('Error uploading audio:', error)
      alert('Failed to upload audio files')
    } finally {
      setUploading(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const handlePlay = async (id: string) => {
    if (playingId === id) {
      // Pause current audio
      audioRef.current?.pause()
      setPlayingId(null)
      return
    }

    // Stop any currently playing audio
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }

    // Play new audio
    const url = await audioStorage.getAudioURL(id)
    if (!url) return

    const audio = new Audio(url)
    audioRef.current = audio
    setPlayingId(id)

    audio.addEventListener('ended', () => {
      setPlayingId(null)
      URL.revokeObjectURL(url)
    })

    audio.addEventListener('error', () => {
      setPlayingId(null)
      URL.revokeObjectURL(url)
      alert('Failed to play audio')
    })

    audio.play()
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this audio file?')) return

    try {
      // Stop if currently playing
      if (playingId === id) {
        audioRef.current?.pause()
        setPlayingId(null)
      }

      await audioStorage.deleteAudio(id)
      await loadAudios()
    } catch (error) {
      console.error('Error deleting audio:', error)
      alert('Failed to delete audio file')
    }
  }

  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  const formatDuration = (seconds?: number): string => {
    if (!seconds) return 'Unknown'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="space-y-4">
      {/* Upload Button */}
      <div>
        <input
          ref={fileInputRef}
          type="file"
          accept="audio/*"
          multiple
          onChange={handleFileSelect}
          className="hidden"
          id="audio-upload-input"
        />
        <label htmlFor="audio-upload-input">
          <Button
            type="button"
            variant="outline"
            disabled={uploading}
            className="cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="w-4 h-4 mr-2" />
            {uploading ? 'Uploading...' : 'Upload Audio Files'}
          </Button>
        </label>
        <p className="text-xs text-foreground/60 mt-2">
          Supported formats: MP3, WAV, OGG, M4A (max 10MB per file)
        </p>
      </div>

      {/* Storage Info */}
      {audios.length > 0 && (
        <div className="p-3 bg-background/50 border border-border rounded-lg">
          <div className="flex justify-between items-center text-sm">
            <span className="text-foreground/60">Total Storage Used:</span>
            <span className="font-semibold">{formatSize(totalSize)}</span>
          </div>
          <div className="flex justify-between items-center text-sm mt-1">
            <span className="text-foreground/60">Audio Files:</span>
            <span className="font-semibold">{audios.length}</span>
          </div>
        </div>
      )}

      {/* Audio List */}
      {audios.length === 0 ? (
        <div className="text-center py-8 text-foreground/60">
          <Music className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No custom audio files uploaded yet</p>
          <p className="text-xs mt-1">Upload your own Azan recordings or custom sounds</p>
        </div>
      ) : (
        <div className="space-y-2">
          {audios.map((audio) => (
            <div
              key={audio.id}
              className="flex items-center justify-between p-3 border border-border rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{audio.name}</div>
                <div className="text-xs text-foreground/60 mt-1">
                  {formatSize(audio.size)} • {formatDuration(audio.duration)}
                </div>
              </div>
              
              <div className="flex items-center gap-2 ml-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handlePlay(audio.id)}
                  className="h-8 w-8 p-0"
                >
                  {playingId === audio.id ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDelete(audio.id)}
                  className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Instructions */}
      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200 font-semibold mb-1">
          How to use custom audio for prayer times:
        </p>
        <ol className="text-xs text-blue-700 dark:text-blue-300 space-y-1 ml-4 list-decimal">
          <li>Upload your custom Azan or prayer audio files above</li>
          <li>Go to the "Islamic Prayer Times" section</li>
          <li>For each prayer time, select your custom audio from the dropdown</li>
          <li>Your custom audio will play instead of the default Azan</li>
        </ol>
      </div>
    </div>
  )
}
