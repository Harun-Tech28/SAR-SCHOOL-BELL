import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Timetable } from '../types';

export async function exportTimetablesJson(timetables: Timetable[]) {
  const path = FileSystem.documentDirectory + 'timetables.json';
  await FileSystem.writeAsStringAsync(path, JSON.stringify(timetables, null, 2), { encoding: FileSystem.EncodingType.UTF8 });
  if (await Sharing.isAvailableAsync()) {
    await Sharing.shareAsync(path);
  }
  return path;
}

export async function importTimetablesFromString(json: string): Promise<Timetable[]> {
  try {
    const parsed = JSON.parse(json);
    if (Array.isArray(parsed)) return parsed as Timetable[];
    return [];
  } catch (e) {
    console.warn('Import failed', e);
    return [];
  }
}
