const fs = require('fs');
const path = require('path');
const { app } = require('electron');

class StorageManager {
  constructor() {
    this.dataPath = path.join(app.getPath('userData'), 'GhanaBell');
    this.ensureDataDir();
  }

  ensureDataDir() {
    if (!fs.existsSync(this.dataPath)) {
      fs.mkdirSync(this.dataPath, { recursive: true });
    }
  }

  getDataPath() {
    return this.dataPath;
  }

  getFilePath(filename) {
    return path.join(this.dataPath, `${filename}.json`);
  }

  saveFile(filename, data) {
    try {
      const filePath = this.getFilePath(filename);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`[Storage] Saved: ${filename}`);
      return { success: true };
    } catch (error) {
      console.error(`[Storage] Error saving ${filename}:`, error);
      return { success: false, error: error.message };
    }
  }

  loadFile(filename) {
    try {
      const filePath = this.getFilePath(filename);
      if (!fs.existsSync(filePath)) {
        return { success: true, data: null };
      }
      const data = fs.readFileSync(filePath, 'utf8');
      return { success: true, data: JSON.parse(data) };
    } catch (error) {
      console.error(`[Storage] Error loading ${filename}:`, error);
      return { success: false, error: error.message };
    }
  }

  deleteFile(filename) {
    try {
      const filePath = this.getFilePath(filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`[Storage] Deleted: ${filename}`);
      }
      return { success: true };
    } catch (error) {
      console.error(`[Storage] Error deleting ${filename}:`, error);
      return { success: false, error: error.message };
    }
  }

  listFiles() {
    try {
      const files = fs.readdirSync(this.dataPath);
      return { success: true, data: files };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  clearAll() {
    try {
      const files = fs.readdirSync(this.dataPath);
      files.forEach(file => {
        fs.unlinkSync(path.join(this.dataPath, file));
      });
      console.log('[Storage] Cleared all data');
      return { success: true };
    } catch (error) {
      console.error('[Storage] Error clearing data:', error);
      return { success: false, error: error.message };
    }
  }

  getStorageStats() {
    try {
      const stats = {
        dataPath: this.dataPath,
        totalFiles: 0,
        totalSize: 0,
        files: []
      };

      if (fs.existsSync(this.dataPath)) {
        const files = fs.readdirSync(this.dataPath);
        stats.totalFiles = files.length;

        files.forEach(file => {
          const filePath = path.join(this.dataPath, file);
          const stat = fs.statSync(filePath);
          stats.totalSize += stat.size;
          stats.files.push({
            name: file,
            size: stat.size,
            created: stat.birthtime,
            modified: stat.mtime
          });
        });
      }

      return { success: true, data: stats };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

module.exports = StorageManager;
