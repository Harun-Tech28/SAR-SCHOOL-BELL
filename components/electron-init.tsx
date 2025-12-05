'use client';

import { useEffect } from 'react';
import { initializeElectronAudio } from '@/lib/electron-audio-handler';
import { isElectron } from '@/lib/electron-utils';

/**
 * Electron Initialization Component
 * 
 * Initializes Electron-specific features when running in Electron environment.
 * This includes audio playback handlers and other Electron integrations.
 */
export function ElectronInit() {
  useEffect(() => {
    if (!isElectron()) {
      return;
    }

    console.log('[ElectronInit] Initializing Electron features');

    // Initialize audio handler
    initializeElectronAudio();

    // Log Electron environment info
    if (window.electronAPI) {
      console.log('[ElectronInit] Electron API available');
      console.log('[ElectronInit] Platform:', window.electronAPI.platform);
    }

  }, []);

  // This component doesn't render anything
  return null;
}
