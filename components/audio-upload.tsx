"use client"

import { useState, useRef, useEffect } from "react"
import { Upload, Play, Pause, Trash2, Download, FileAudio, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { audioStorage, type AudioMetadata } from "@/lib/audio-storage"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

interface AudioUploadProps {
    category?: 'timetable' | 'prayer' | 'general'
    onAudioSelect?: (audioId: string) => void
    selectedAudioId?: string
}

export function AudioUpload({ category = 'general', onAudioSelect, selectedAudioId }: AudioUploadProps) {
    const [audios, setAudios] = useState<AudioMetadata[]>([])
    const [uploading, setUploading] = useState(false)
    const [playingId, setPlayingId] = useState<string | null>(null)
    const [dragActive, setDragActive] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const { toast } = useToast()

    useEffect(() => {
        loadAudios()
    }, [category])

    const loadAudios = async () => {
        try {
            const audioList = await audioStorage.listAudios(category)
            setAudios(audioList.sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()))
        } catch (error) {
            console.error('Failed to load audios:', error)
            toast({
                title: "Error",
                description: "Failed to load audio files",
                variant: "destructive"
            })
        }
    }

    const handleFileSelect = async (files: FileList | null) => {
        if (!files || files.length === 0) return

        const file = files[0]

        // Validate file type
        // Validate file type
        const validTypes = [
            'audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/x-wav', 'audio/wave',
            'audio/ogg', 'audio/mp4', 'audio/x-m4a', 'audio/aac', 'audio/webm',
            'audio/flac'
        ]

        const validExtensions = ['.mp3', '.wav', '.ogg', '.m4a', '.mp4', '.aac', '.webm', '.flac']
        const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()

        if (!validTypes.includes(file.type) && !validExtensions.includes(fileExtension)) {
            console.error('Invalid file type:', file.type, 'Extension:', fileExtension)
            toast({
                title: "Invalid File",
                description: `File type ${file.type || 'unknown'} not supported. Please upload an audio file.`,
                variant: "destructive"
            })
            return
        }

        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
            toast({
                title: "File Too Large",
                description: "Please upload a file smaller than 10MB",
                variant: "destructive"
            })
            return
        }

        setUploading(true)
        try {
            await audioStorage.saveAudio(file, category)
            toast({
                title: "Success",
                description: `${file.name} uploaded successfully`
            })
            await loadAudios()
        } catch (error) {
            console.error('Upload failed:', error)
            toast({
                title: "Upload Failed",
                description: "Failed to save audio file",
                variant: "destructive"
            })
        } finally {
            setUploading(false)
            if (fileInputRef.current) {
                fileInputRef.current.value = ''
            }
        }
    }

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
        handleFileSelect(e.dataTransfer.files)
    }

    const playAudio = async (audio: AudioMetadata) => {
        try {
            // Stop current audio if playing
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
            }

            if (playingId === audio.id) {
                setPlayingId(null)
                return
            }

            const storedAudio = await audioStorage.getAudio(audio.id)
            if (!storedAudio) return

            const url = URL.createObjectURL(storedAudio.audioBlob)
            const audioElement = new Audio(url)

            audioElement.onended = () => {
                setPlayingId(null)
                URL.revokeObjectURL(url)
            }

            audioElement.onerror = () => {
                setPlayingId(null)
                URL.revokeObjectURL(url)
                toast({
                    title: "Playback Error",
                    description: "Failed to play audio file",
                    variant: "destructive"
                })
            }

            audioRef.current = audioElement
            setPlayingId(audio.id)
            await audioElement.play()
        } catch (error) {
            console.error('Playback failed:', error)
            setPlayingId(null)
        }
    }

    const deleteAudio = async (audioId: string) => {
        if (!confirm('Are you sure you want to delete this audio file?')) return

        try {
            await audioStorage.deleteAudio(audioId)
            toast({
                title: "Deleted",
                description: "Audio file deleted successfully"
            })
            await loadAudios()
            if (playingId === audioId) {
                audioRef.current?.pause()
                setPlayingId(null)
            }
        } catch (error) {
            console.error('Delete failed:', error)
            toast({
                title: "Error",
                description: "Failed to delete audio file",
                variant: "destructive"
            })
        }
    }

    const exportAudios = async () => {
        try {
            const blob = await audioStorage.exportAll()
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `school-bell-audio-backup-${new Date().toISOString().split('T')[0]}.json`
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            URL.revokeObjectURL(url)

            toast({
                title: "Export Successful",
                description: "Audio files exported successfully"
            })
        } catch (error) {
            console.error('Export failed:', error)
            toast({
                title: "Export Failed",
                description: "Failed to export audio files",
                variant: "destructive"
            })
        }
    }

    const importAudios = async (files: FileList | null) => {
        if (!files || files.length === 0) return

        const file = files[0]
        if (file.type !== 'application/json') {
            toast({
                title: "Invalid File",
                description: "Please select a valid backup JSON file",
                variant: "destructive"
            })
            return
        }

        try {
            const imported = await audioStorage.importAll(file)
            toast({
                title: "Import Successful",
                description: `Imported ${imported} audio file(s)`
            })
            await loadAudios()
        } catch (error) {
            console.error('Import failed:', error)
            toast({
                title: "Import Failed",
                description: "Failed to import audio files",
                variant: "destructive"
            })
        }
    }

    const formatFileSize = (bytes: number): string => {
        if (bytes < 1024) return bytes + ' B'
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
    }

    const formatDuration = (seconds: number): string => {
        const mins = Math.floor(seconds / 60)
        const secs = Math.floor(seconds % 60)
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Audio Library</CardTitle>
                <CardDescription>
                    Upload and manage custom audio files for announcements and bells
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Upload Area */}
                <div
                    className={cn(
                        "border-2 border-dashed rounded-lg p-8 text-center transition-colors",
                        dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25",
                        uploading && "opacity-50 pointer-events-none"
                    )}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                >
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm font-medium mb-2">
                        Drag and drop audio file here, or click to browse
                    </p>
                    <p className="text-xs text-muted-foreground mb-4">
                        Supports MP3, WAV, OGG, M4A (max 10MB)
                    </p>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="audio/mpeg,audio/wav,audio/ogg,audio/mp4,audio/x-m4a"
                        onChange={(e) => handleFileSelect(e.target.files)}
                        className="hidden"
                    />
                    <Button
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                    >
                        {uploading ? "Uploading..." : "Select File"}
                    </Button>
                </div>

                {/* Export/Import Buttons */}
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={exportAudios}
                        disabled={audios.length === 0}
                    >
                        <Download className="w-4 h-4 mr-2" />
                        Export All
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                            const input = document.createElement('input')
                            input.type = 'file'
                            input.accept = 'application/json'
                            input.onchange = (e) => importAudios((e.target as HTMLInputElement).files)
                            input.click()
                        }}
                    >
                        <Upload className="w-4 h-4 mr-2" />
                        Import Backup
                    </Button>
                </div>

                {/* Audio List */}
                <div className="space-y-2">
                    {audios.length === 0 ? (
                        <div className="text-center py-8 text-muted-foreground">
                            <FileAudio className="w-12 h-12 mx-auto mb-2 opacity-50" />
                            <p className="text-sm">No audio files uploaded yet</p>
                        </div>
                    ) : (
                        audios.map((audio) => (
                            <div
                                key={audio.id}
                                className={cn(
                                    "flex items-center gap-3 p-3 rounded-lg border transition-colors",
                                    selectedAudioId === audio.id ? "border-primary bg-primary/5" : "border-border",
                                    onAudioSelect && "cursor-pointer hover:bg-muted/50"
                                )}
                                onClick={() => onAudioSelect?.(audio.id)}
                            >
                                <FileAudio className="w-8 h-8 text-muted-foreground flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium truncate">{audio.name}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {formatDuration(audio.duration)} • {formatFileSize(audio.fileSize)}
                                    </p>
                                </div>
                                <div className="flex gap-1">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            playAudio(audio)
                                        }}
                                    >
                                        {playingId === audio.id ? (
                                            <Pause className="w-4 h-4" />
                                        ) : (
                                            <Play className="w-4 h-4" />
                                        )}
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            deleteAudio(audio.id)
                                        }}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
