// Cache Manager for PWA
// Handles caching strategies and cache management

export interface CacheConfig {
  version: string;
  caches: {
    static: string;
    assets: string;
    audio: string;
    data: string;
  };
}

export const DEFAULT_CACHE_CONFIG: CacheConfig = {
  version: "v1.0.0",
  caches: {
    static: "sar-bell-static-v1.0.0",
    assets: "sar-bell-assets-v1.0.0",
    audio: "sar-bell-audio-v1.0.0",
    data: "sar-bell-data-v1.0.0",
  },
};

export class CacheManager {
  private config: CacheConfig;

  constructor(config: CacheConfig = DEFAULT_CACHE_CONFIG) {
    this.config = config;
  }

  /**
   * Pre-cache essential assets
   */
  async precache(urls: string[]): Promise<void> {
    if (typeof window === "undefined" || !("caches" in window)) {
      console.warn("[Cache] Cache API not available");
      return;
    }

    try {
      const cache = await caches.open(this.config.caches.static);
      await cache.addAll(urls);
      console.log(`[Cache] Precached ${urls.length} assets`);
    } catch (error) {
      console.error("[Cache] Precaching failed:", error);
      throw error;
    }
  }

  /**
   * Cache-first strategy: Check cache first, fallback to network
   */
  async cacheFirst(request: Request): Promise<Response> {
    if (typeof window === "undefined" || !("caches" in window)) {
      return fetch(request);
    }

    try {
      const cachedResponse = await caches.match(request);
      if (cachedResponse) {
        return cachedResponse;
      }

      const networkResponse = await fetch(request);
      if (networkResponse.ok) {
        const cache = await caches.open(this.config.caches.assets);
        cache.put(request, networkResponse.clone());
      }

      return networkResponse;
    } catch (error) {
      console.error("[Cache] Cache-first strategy failed:", error);
      throw error;
    }
  }

  /**
   * Network-first strategy: Try network first, fallback to cache
   */
  async networkFirst(request: Request): Promise<Response> {
    if (typeof window === "undefined" || !("caches" in window)) {
      return fetch(request);
    }

    try {
      const networkResponse = await fetch(request);
      if (networkResponse.ok) {
        const cache = await caches.open(this.config.caches.data);
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    } catch (error) {
      console.warn("[Cache] Network failed, trying cache:", error);
      const cachedResponse = await caches.match(request);
      if (cachedResponse) {
        return cachedResponse;
      }
      throw error;
    }
  }

  /**
   * Stale-while-revalidate: Return cache immediately, update in background
   */
  async staleWhileRevalidate(request: Request): Promise<Response> {
    if (typeof window === "undefined" || !("caches" in window)) {
      return fetch(request);
    }

    const cachedResponse = await caches.match(request);

    const fetchPromise = fetch(request).then((networkResponse) => {
      if (networkResponse.ok) {
        const cache = caches.open(this.config.caches.data);
        cache.then((c) => c.put(request, networkResponse.clone()));
      }
      return networkResponse;
    });

    return cachedResponse || fetchPromise;
  }

  /**
   * Clear old caches (cleanup)
   */
  async clearOldCaches(): Promise<void> {
    if (typeof window === "undefined" || !("caches" in window)) {
      return;
    }

    try {
      const cacheNames = await caches.keys();
      const validCacheNames = Object.values(this.config.caches);

      const deletionPromises = cacheNames
        .filter((cacheName) => !validCacheNames.includes(cacheName))
        .map((cacheName) => {
          console.log(`[Cache] Deleting old cache: ${cacheName}`);
          return caches.delete(cacheName);
        });

      await Promise.all(deletionPromises);
      console.log("[Cache] Old caches cleared");
    } catch (error) {
      console.error("[Cache] Failed to clear old caches:", error);
    }
  }

  /**
   * Get total cache size
   */
  async getCacheSize(): Promise<number> {
    if (typeof window === "undefined" || !("caches" in window)) {
      return 0;
    }

    try {
      let totalSize = 0;
      const cacheNames = await caches.keys();

      for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const requests = await cache.keys();

        for (const request of requests) {
          const response = await cache.match(request);
          if (response) {
            const blob = await response.blob();
            totalSize += blob.size;
          }
        }
      }

      return totalSize;
    } catch (error) {
      console.error("[Cache] Failed to calculate cache size:", error);
      return 0;
    }
  }

  /**
   * Get cache statistics
   */
  async getCacheStats(): Promise<{
    caches: Array<{ name: string; size: number; count: number }>;
    totalSize: number;
    totalCount: number;
  }> {
    if (typeof window === "undefined" || !("caches" in window)) {
      return { caches: [], totalSize: 0, totalCount: 0 };
    }

    try {
      const cacheNames = await caches.keys();
      const cacheStats = [];
      let totalSize = 0;
      let totalCount = 0;

      for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const requests = await cache.keys();
        let cacheSize = 0;

        for (const request of requests) {
          const response = await cache.match(request);
          if (response) {
            const blob = await response.blob();
            cacheSize += blob.size;
          }
        }

        cacheStats.push({
          name: cacheName,
          size: cacheSize,
          count: requests.length,
        });

        totalSize += cacheSize;
        totalCount += requests.length;
      }

      return {
        caches: cacheStats,
        totalSize,
        totalCount,
      };
    } catch (error) {
      console.error("[Cache] Failed to get cache stats:", error);
      return { caches: [], totalSize: 0, totalCount: 0 };
    }
  }

  /**
   * Clear specific cache
   */
  async clearCache(cacheName: string): Promise<boolean> {
    if (typeof window === "undefined" || !("caches" in window)) {
      return false;
    }

    try {
      const deleted = await caches.delete(cacheName);
      if (deleted) {
        console.log(`[Cache] Cleared cache: ${cacheName}`);
      }
      return deleted;
    } catch (error) {
      console.error(`[Cache] Failed to clear cache ${cacheName}:`, error);
      return false;
    }
  }

  /**
   * Clear all caches
   */
  async clearAllCaches(): Promise<void> {
    if (typeof window === "undefined" || !("caches" in window)) {
      return;
    }

    try {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map((name) => caches.delete(name)));
      console.log("[Cache] All caches cleared");
    } catch (error) {
      console.error("[Cache] Failed to clear all caches:", error);
    }
  }

  /**
   * Add item to cache
   */
  async addToCache(
    cacheName: keyof CacheConfig["caches"],
    request: Request | string,
    response?: Response
  ): Promise<void> {
    if (typeof window === "undefined" || !("caches" in window)) {
      return;
    }

    try {
      const cache = await caches.open(this.config.caches[cacheName]);

      if (response) {
        await cache.put(request, response);
      } else {
        await cache.add(request);
      }

      console.log(`[Cache] Added to ${cacheName} cache:`, request);
    } catch (error) {
      console.error(`[Cache] Failed to add to ${cacheName} cache:`, error);
    }
  }

  /**
   * Remove item from cache
   */
  async removeFromCache(
    cacheName: keyof CacheConfig["caches"],
    request: Request | string
  ): Promise<boolean> {
    if (typeof window === "undefined" || !("caches" in window)) {
      return false;
    }

    try {
      const cache = await caches.open(this.config.caches[cacheName]);
      const deleted = await cache.delete(request);

      if (deleted) {
        console.log(`[Cache] Removed from ${cacheName} cache:`, request);
      }

      return deleted;
    } catch (error) {
      console.error(`[Cache] Failed to remove from ${cacheName} cache:`, error);
      return false;
    }
  }

  /**
   * Check if item exists in cache
   */
  async hasInCache(
    cacheName: keyof CacheConfig["caches"],
    request: Request | string
  ): Promise<boolean> {
    if (typeof window === "undefined" || !("caches" in window)) {
      return false;
    }

    try {
      const cache = await caches.open(this.config.caches[cacheName]);
      const response = await cache.match(request);
      return response !== undefined;
    } catch (error) {
      console.error(`[Cache] Failed to check ${cacheName} cache:`, error);
      return false;
    }
  }
}

// Export singleton instance
export const cacheManager = new CacheManager();
