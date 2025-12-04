import type { AIVoiceProviderType, ProviderConfig, AudioGenerationRequest } from "./ai-voice-types"

interface RateLimitState {
  requests: number[]
  characters: number[]
  lastReset: number
}

interface QueuedRequest {
  id: string
  request: AudioGenerationRequest
  resolve: (value: any) => void
  reject: (error: any) => void
  timestamp: number
  retryCount: number
}

export class RateLimiter {
  private limits: Map<AIVoiceProviderType, ProviderConfig['rateLimit']> = new Map()
  private state: Map<AIVoiceProviderType, RateLimitState> = new Map()
  private queues: Map<AIVoiceProviderType, QueuedRequest[]> = new Map()
  private processing: Map<AIVoiceProviderType, boolean> = new Map()
  
  private readonly MINUTE_MS = 60 * 1000
  private readonly DAY_MS = 24 * 60 * 60 * 1000
  private readonly MAX_QUEUE_SIZE = 100
  private readonly MAX_RETRY_COUNT = 3
  private readonly RETRY_DELAY_BASE = 1000 // 1 second

  constructor() {
    // Start queue processing
    this.startQueueProcessor()
  }

  updateProviderLimits(provider: AIVoiceProviderType, limits: ProviderConfig['rateLimit']): void {
    this.limits.set(provider, limits)
    
    if (!this.state.has(provider)) {
      this.state.set(provider, {
        requests: [],
        characters: [],
        lastReset: Date.now()
      })
    }
    
    if (!this.queues.has(provider)) {
      this.queues.set(provider, [])
    }
    
    if (!this.processing.has(provider)) {
      this.processing.set(provider, false)
    }
  }

  async executeWithRateLimit<T>(
    provider: AIVoiceProviderType,
    request: AudioGenerationRequest,
    executor: () => Promise<T>
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      const queuedRequest: QueuedRequest = {
        id: request.id,
        request,
        resolve,
        reject,
        timestamp: Date.now(),
        retryCount: 0
      }

      this.enqueueRequest(provider, queuedRequest, executor)
    })
  }

  private enqueueRequest<T>(
    provider: AIVoiceProviderType,
    queuedRequest: QueuedRequest,
    executor: () => Promise<T>
  ): void {
    const queue = this.queues.get(provider)
    if (!queue) {
      queuedRequest.reject(new Error(`Provider ${provider} not configured`))
      return
    }

    // Check queue size limit
    if (queue.length >= this.MAX_QUEUE_SIZE) {
      queuedRequest.reject(new Error(`Queue full for provider ${provider}`))
      return
    }

    // Add executor to the request
    (queuedRequest as any).executor = executor

    // Priority queue: high priority requests go first
    if (queuedRequest.request.priority === 'high') {
      queue.unshift(queuedRequest)
    } else {
      queue.push(queuedRequest)
    }

    // Start processing if not already running
    this.processQueue(provider)
  }

  private async processQueue(provider: AIVoiceProviderType): Promise<void> {
    if (this.processing.get(provider)) {
      return // Already processing
    }

    this.processing.set(provider, true)

    const queue = this.queues.get(provider)
    if (!queue) {
      this.processing.set(provider, false)
      return
    }

    while (queue.length > 0) {
      const queuedRequest = queue.shift()!
      
      try {
        // Check if request has expired (older than 5 minutes)
        if (Date.now() - queuedRequest.timestamp > 5 * 60 * 1000) {
          queuedRequest.reject(new Error("Request expired"))
          continue
        }

        // Wait for rate limit availability
        await this.waitForRateLimit(provider, queuedRequest.request)

        // Execute the request
        const executor = (queuedRequest as any).executor
        const result = await executor()
        
        // Record the request
        this.recordRequest(provider, queuedRequest.request)
        
        queuedRequest.resolve(result)
      } catch (error) {
        // Handle retries
        if (queuedRequest.retryCount < this.MAX_RETRY_COUNT && this.isRetryableError(error)) {
          queuedRequest.retryCount++
          
          // Exponential backoff
          const delay = this.RETRY_DELAY_BASE * Math.pow(2, queuedRequest.retryCount - 1)
          
          setTimeout(() => {
            queue.push(queuedRequest) // Re-queue for retry
          }, delay)
        } else {
          queuedRequest.reject(error)
        }
      }
    }

    this.processing.set(provider, false)
  }

  private async waitForRateLimit(
    provider: AIVoiceProviderType,
    request: AudioGenerationRequest
  ): Promise<void> {
    const limits = this.limits.get(provider)
    if (!limits) return

    while (true) {
      if (this.canMakeRequest(provider, request)) {
        return
      }

      // Wait before checking again
      await this.sleep(1000) // Wait 1 second
    }
  }

  private canMakeRequest(
    provider: AIVoiceProviderType,
    request: AudioGenerationRequest
  ): boolean {
    const limits = this.limits.get(provider)
    const state = this.state.get(provider)
    
    if (!limits || !state) return true

    const now = Date.now()
    
    // Clean up old entries
    this.cleanupOldEntries(state, now)

    // Check requests per minute limit
    if (state.requests.length >= limits.requestsPerMinute) {
      return false
    }

    // Check characters per day limit
    const todayCharacters = state.characters.reduce((sum, chars) => sum + chars, 0)
    if (todayCharacters + request.text.length > limits.charactersPerDay) {
      return false
    }

    return true
  }

  private cleanupOldEntries(state: RateLimitState, now: number): void {
    // Remove requests older than 1 minute
    const minuteAgo = now - this.MINUTE_MS
    state.requests = state.requests.filter(timestamp => timestamp > minuteAgo)

    // Reset daily counters if it's a new day
    if (now - state.lastReset > this.DAY_MS) {
      state.characters = []
      state.lastReset = now
    }
  }

  private recordRequest(provider: AIVoiceProviderType, request: AudioGenerationRequest): void {
    const state = this.state.get(provider)
    if (!state) return

    const now = Date.now()
    
    // Record request timestamp
    state.requests.push(now)
    
    // Record character count
    state.characters.push(request.text.length)
  }

  private isRetryableError(error: any): boolean {
    // Retry on rate limits and temporary service issues
    return error?.code === 'RATE_LIMIT' || 
           error?.code === 'SERVICE_UNAVAILABLE' ||
           error?.retryable === true
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  private startQueueProcessor(): void {
    // Process queues every second
    setInterval(() => {
      for (const provider of this.queues.keys()) {
        if (!this.processing.get(provider)) {
          this.processQueue(provider)
        }
      }
    }, 1000)
  }

  // Public methods for monitoring
  getQueueStatus(): Record<AIVoiceProviderType, {
    queueLength: number
    processing: boolean
    oldestRequest?: number
  }> {
    const status: Record<string, any> = {}

    for (const [provider, queue] of this.queues.entries()) {
      const oldestRequest = queue.length > 0 ? queue[0].timestamp : undefined
      
      status[provider] = {
        queueLength: queue.length,
        processing: this.processing.get(provider) || false,
        oldestRequest
      }
    }

    return status as Record<AIVoiceProviderType, {
      queueLength: number
      processing: boolean
      oldestRequest?: number
    }>
  }

  getRateLimitStatus(): Record<AIVoiceProviderType, {
    requestsInLastMinute: number
    charactersToday: number
    requestsPerMinuteLimit: number
    charactersPerDayLimit: number
    utilizationPercent: number
  }> {
    const status: Record<string, any> = {}

    for (const [provider, state] of this.state.entries()) {
      const limits = this.limits.get(provider)
      if (!limits) continue

      const now = Date.now()
      this.cleanupOldEntries(state, now)

      const requestsInLastMinute = state.requests.length
      const charactersToday = state.characters.reduce((sum, chars) => sum + chars, 0)
      
      const requestUtilization = (requestsInLastMinute / limits.requestsPerMinute) * 100
      const characterUtilization = (charactersToday / limits.charactersPerDay) * 100
      const utilizationPercent = Math.max(requestUtilization, characterUtilization)

      status[provider] = {
        requestsInLastMinute,
        charactersToday,
        requestsPerMinuteLimit: limits.requestsPerMinute,
        charactersPerDayLimit: limits.charactersPerDay,
        utilizationPercent: Math.round(utilizationPercent)
      }
    }

    return status as Record<AIVoiceProviderType, {
      requestsInLastMinute: number
      charactersToday: number
      requestsPerMinuteLimit: number
      charactersPerDayLimit: number
      utilizationPercent: number
    }>
  }

  clearQueue(provider: AIVoiceProviderType): void {
    const queue = this.queues.get(provider)
    if (queue) {
      // Reject all pending requests
      for (const request of queue) {
        request.reject(new Error("Queue cleared"))
      }
      queue.length = 0
    }
  }

  clearAllQueues(): void {
    for (const provider of this.queues.keys()) {
      this.clearQueue(provider)
    }
  }

  getEstimatedWaitTime(provider: AIVoiceProviderType): number {
    const queue = this.queues.get(provider)
    const limits = this.limits.get(provider)
    
    if (!queue || !limits || queue.length === 0) {
      return 0
    }

    // Simple estimation: queue length / requests per minute * 60 seconds
    return Math.ceil((queue.length / limits.requestsPerMinute) * 60)
  }
}

// Global rate limiter instance
let rateLimiterInstance: RateLimiter | null = null

export const getRateLimiter = (): RateLimiter => {
  if (!rateLimiterInstance) {
    rateLimiterInstance = new RateLimiter()
  }
  return rateLimiterInstance
}