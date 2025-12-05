/**
 * Electron Storage Manager
 * 
 * Handles file system storage for the Electron application.
 * Provides secure, persistent storage for settings, timetables, and user data.
 */

const fs = require('fs').promises;
const path = require('path');
const { app } = require('electron');

class StorageManager {
  constructor() {
    this.dataPath = path.join(app.getPath('userData'), 'data');
    this.initialized = false;
  }

  /**
   * Initialize storage manager
   */
  async initialize() {
    if (this.initialized) return;

    try {
      // Ensure data directory exists
      await fs.mkdir(this.dataPath, { recursive: true });
      console.log('[Storage] Data directory initialized:', this.dataPath);
      this.initialized = true;
    } catch (error) {
      console.error('[Storage] Failed to initialize:', error);
      throw error;
    }
  }

  /**
   * Get the data directory path
   */
  getDataPath() {
    return this.dataPath;
  }

  /**
   * Save settings to file system
   */
  async saveSettings(settings) {
    await this.initialize();

    try {
      const settingsPath = path.join(this.dataPath, 'settings.json');
      const data = JSON.stringify(settings, null, 2);
      
      // Write with secure permissions (user-only read/write)
      await fs.writeFile(settingsPath, data, { 
        encoding: 'utf8',
        mode: 0o600 
      });

      console.log('[Storage] Settings saved successfully');
      return { success: true };
    } catch (error) {
      console.error('[Storage] Failed to save settings:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Load settings from file system
   */
  async loadSettings() {
    await this.initialize();

    try {
      const settingsPath = path.join(this.dataPath, 'settings.json');
      
      // Check if file exists
      try {
        await fs.access(settingsPath);
      } catch {
        // File doesn't exist, return null
        console.log('[Storage] No settings file found, returning defaults');
        return { success: true, data: null };
      }

      const data = await fs.readFile(settingsPath, 'utf8');
      const settings = JSON.parse(data);
      
      console.log('[Storage] Settings loaded successfully');
      return { success: true, data: settings };
    } catch (error) {
      console.error('[Storage] Failed to load settings:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Save timetable to file system
   */
  async saveTimetable(timetable) {
    await this.initialize();

    try {
      const timetablePath = path.join(this.dataPath, 'timetable.json');
      const data = JSON.stringify(timetable, null, 2);
      
      await fs.writeFile(timetablePath, data, { 
        encoding: 'utf8',
        mode: 0o600 
      });

      console.log('[Storage] Timetable saved successfully');
      return { success: true };
    } catch (error) {
      console.error('[Storage] Failed to save timetable:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Load timetable from file system
   */
  async loadTimetable() {
    await this.initialize();

    try {
      const timetablePath = path.join(this.dataPath, 'timetable.json');
      
      // Check if file exists
      try {
        await fs.access(timetablePath);
      } catch {
        console.log('[Storage] No timetable file found');
        return { success: true, data: null };
      }

      const data = await fs.readFile(timetablePath, 'utf8');
      const timetable = JSON.parse(data);
      
      console.log('[Storage] Timetable loaded successfully');
      return { success: true, data: timetable };
    } catch (error) {
      console.error('[Storage] Failed to load timetable:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Save student data to file system
   */
  async saveStudentData(studentData) {
    await this.initialize();

    try {
      const studentPath = path.join(this.dataPath, 'students.json');
      const data = JSON.stringify(studentData, null, 2);
      
      await fs.writeFile(studentPath, data, { 
        encoding: 'utf8',
        mode: 0o600 
      });

      console.log('[Storage] Student data saved successfully');
      return { success: true };
    } catch (error) {
      console.error('[Storage] Failed to save student data:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Load student data from file system
   */
  async loadStudentData() {
    await this.initialize();

    try {
      const studentPath = path.join(this.dataPath, 'students.json');
      
      try {
        await fs.access(studentPath);
      } catch {
        console.log('[Storage] No student data file found');
        return { success: true, data: null };
      }

      const data = await fs.readFile(studentPath, 'utf8');
      const studentData = JSON.parse(data);
      
      console.log('[Storage] Student data loaded successfully');
      return { success: true, data: studentData };
    } catch (error) {
      console.error('[Storage] Failed to load student data:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Export all data to a single file
   */
  async exportData(exportPath) {
    await this.initialize();

    try {
      const settings = await this.loadSettings();
      const timetable = await this.loadTimetable();
      const studentData = await this.loadStudentData();

      const exportData = {
        version: '1.0',
        exportDate: new Date().toISOString(),
        settings: settings.data,
        timetable: timetable.data,
        studentData: studentData.data
      };

      const data = JSON.stringify(exportData, null, 2);
      await fs.writeFile(exportPath, data, 'utf8');

      console.log('[Storage] Data exported successfully to:', exportPath);
      return { success: true, path: exportPath };
    } catch (error) {
      console.error('[Storage] Failed to export data:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Import data from a file
   */
  async importData(importPath) {
    await this.initialize();

    try {
      const data = await fs.readFile(importPath, 'utf8');
      const importData = JSON.parse(data);

      // Validate import data
      if (!importData.version) {
        throw new Error('Invalid import file: missing version');
      }

      // Import settings
      if (importData.settings) {
        await this.saveSettings(importData.settings);
      }

      // Import timetable
      if (importData.timetable) {
        await this.saveTimetable(importData.timetable);
      }

      // Import student data
      if (importData.studentData) {
        await this.saveStudentData(importData.studentData);
      }

      console.log('[Storage] Data imported successfully from:', importPath);
      return { success: true };
    } catch (error) {
      console.error('[Storage] Failed to import data:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Delete all data (for uninstall)
   */
  async deleteAllData() {
    await this.initialize();

    try {
      // Delete all JSON files in data directory
      const files = await fs.readdir(this.dataPath);
      
      for (const file of files) {
        if (file.endsWith('.json')) {
          const filePath = path.join(this.dataPath, file);
          await fs.unlink(filePath);
          console.log('[Storage] Deleted:', file);
        }
      }

      console.log('[Storage] All data deleted successfully');
      return { success: true };
    } catch (error) {
      console.error('[Storage] Failed to delete data:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Get storage statistics
   */
  async getStorageStats() {
    await this.initialize();

    try {
      const files = await fs.readdir(this.dataPath);
      let totalSize = 0;
      const fileStats = [];

      for (const file of files) {
        const filePath = path.join(this.dataPath, file);
        const stats = await fs.stat(filePath);
        
        if (stats.isFile()) {
          totalSize += stats.size;
          fileStats.push({
            name: file,
            size: stats.size,
            modified: stats.mtime
          });
        }
      }

      return {
        success: true,
        data: {
          totalSize,
          fileCount: fileStats.length,
          files: fileStats,
          dataPath: this.dataPath
        }
      };
    } catch (error) {
      console.error('[Storage] Failed to get storage stats:', error);
      return { success: false, error: error.message };
    }
  }
}

// Export singleton instance
let storageManagerInstance = null;

function getStorageManager() {
  if (!storageManagerInstance) {
    storageManagerInstance = new StorageManager();
  }
  return storageManagerInstance;
}

module.exports = { getStorageManager, StorageManager };
