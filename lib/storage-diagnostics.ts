/**
 * Storage Diagnostics Tool
 * Helps debug localStorage persistence issues
 */

export interface StorageDiagnostics {
  available: boolean;
  type: 'localStorage' | 'sessionStorage' | 'none';
  quota: {
    used: number; // bytes
    available: number; // bytes
    percentage: number;
  };
  keys: string[];
  dataSize: Record<string, number>;
  errors: string[];
}

/**
 * Run comprehensive storage diagnostics
 */
export function runStorageDiagnostics(): StorageDiagnostics {
  const diagnostics: StorageDiagnostics = {
    available: false,
    type: 'none',
    quota: {
      used: 0,
      available: 0,
      percentage: 0,
    },
    keys: [],
    dataSize: {},
    errors: [],
  };

  try {
    // Check if localStorage is available
    if (typeof window === 'undefined') {
      diagnostics.errors.push('Window object not available (SSR)');
      return diagnostics;
    }

    if (!window.localStorage) {
      diagnostics.errors.push('localStorage not available');
      return diagnostics;
    }

    diagnostics.available = true;
    diagnostics.type = 'localStorage';

    // Test write/read
    const testKey = '__storage_test__';
    const testValue = 'test_' + Date.now();
    
    try {
      window.localStorage.setItem(testKey, testValue);
      const readValue = window.localStorage.getItem(testKey);
      
      if (readValue !== testValue) {
        diagnostics.errors.push('Write/read test failed - data mismatch');
      }
      
      window.localStorage.removeItem(testKey);
    } catch (error: any) {
      diagnostics.errors.push(`Write/read test failed: ${error.message}`);
    }

    // Get all keys
    diagnostics.keys = Object.keys(window.localStorage);

    // Calculate storage usage
    let totalSize = 0;
    for (const key of diagnostics.keys) {
      try {
        const value = window.localStorage.getItem(key);
        const size = value ? new Blob([value]).size : 0;
        diagnostics.dataSize[key] = size;
        totalSize += size;
      } catch (error: any) {
        diagnostics.errors.push(`Failed to read key "${key}": ${error.message}`);
      }
    }

    diagnostics.quota.used = totalSize;

    // Estimate available quota (typically 5-10MB for localStorage)
    // We'll use 5MB as a conservative estimate
    const estimatedQuota = 5 * 1024 * 1024; // 5MB
    diagnostics.quota.available = estimatedQuota;
    diagnostics.quota.percentage = (totalSize / estimatedQuota) * 100;

    // Check if we're close to quota
    if (diagnostics.quota.percentage > 80) {
      diagnostics.errors.push(`Storage usage is high (${diagnostics.quota.percentage.toFixed(1)}%)`);
    }

  } catch (error: any) {
    diagnostics.errors.push(`Diagnostics failed: ${error.message}`);
  }

  return diagnostics;
}

/**
 * Print diagnostics to console
 */
export function printStorageDiagnostics(): void {
  const diagnostics = runStorageDiagnostics();

  console.group('📊 Storage Diagnostics');
  console.log('Available:', diagnostics.available);
  console.log('Type:', diagnostics.type);
  console.log('Quota Used:', formatBytes(diagnostics.quota.used));
  console.log('Quota Available:', formatBytes(diagnostics.quota.available));
  console.log('Usage Percentage:', diagnostics.quota.percentage.toFixed(2) + '%');
  console.log('Keys:', diagnostics.keys.length);
  
  if (diagnostics.keys.length > 0) {
    console.group('Data Sizes:');
    for (const [key, size] of Object.entries(diagnostics.dataSize)) {
      console.log(`  ${key}: ${formatBytes(size)}`);
    }
    console.groupEnd();
  }

  if (diagnostics.errors.length > 0) {
    console.group('⚠️ Errors:');
    diagnostics.errors.forEach(error => console.error(error));
    console.groupEnd();
  }

  console.groupEnd();
}

/**
 * Format bytes to human-readable string
 */
function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Check if specific key exists and is valid
 */
export function checkStorageKey(key: string): {
  exists: boolean;
  size: number;
  valid: boolean;
  data?: any;
  error?: string;
} {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return { exists: false, size: 0, valid: false, error: 'localStorage not available' };
    }

    const value = window.localStorage.getItem(key);
    
    if (value === null) {
      return { exists: false, size: 0, valid: false };
    }

    const size = new Blob([value]).size;

    // Try to parse as JSON
    try {
      const data = JSON.parse(value);
      return { exists: true, size, valid: true, data };
    } catch (parseError) {
      return { exists: true, size, valid: false, error: 'Invalid JSON' };
    }

  } catch (error: any) {
    return { exists: false, size: 0, valid: false, error: error.message };
  }
}

/**
 * Force save test data to verify persistence
 */
export function testPersistence(): boolean {
  try {
    const testKey = '__persistence_test__';
    const testData = {
      timestamp: Date.now(),
      test: 'persistence_check',
      random: Math.random(),
    };

    // Save
    window.localStorage.setItem(testKey, JSON.stringify(testData));
    console.log('✅ Test data saved');

    // Read back immediately
    const readValue = window.localStorage.getItem(testKey);
    if (!readValue) {
      console.error('❌ Test data not found after save');
      return false;
    }

    const readData = JSON.parse(readValue);
    if (readData.timestamp !== testData.timestamp) {
      console.error('❌ Test data mismatch');
      return false;
    }

    console.log('✅ Test data verified');

    // Clean up
    window.localStorage.removeItem(testKey);

    return true;
  } catch (error) {
    console.error('❌ Persistence test failed:', error);
    return false;
  }
}

/**
 * Export all localStorage data for backup
 */
export function exportLocalStorage(): string {
  try {
    const data: Record<string, string | null> = {};
    
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (key) {
        data[key] = window.localStorage.getItem(key);
      }
    }

    return JSON.stringify(data, null, 2);
  } catch (error) {
    console.error('Failed to export localStorage:', error);
    return '{}';
  }
}

/**
 * Import localStorage data from backup
 */
export function importLocalStorage(jsonData: string): boolean {
  try {
    const data = JSON.parse(jsonData);
    
    for (const [key, value] of Object.entries(data)) {
      if (typeof value === 'string') {
        window.localStorage.setItem(key, value);
      }
    }

    console.log('✅ localStorage imported successfully');
    return true;
  } catch (error) {
    console.error('❌ Failed to import localStorage:', error);
    return false;
  }
}

