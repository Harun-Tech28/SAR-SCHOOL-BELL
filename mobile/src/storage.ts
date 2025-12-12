import AsyncStorage from '@react-native-async-storage/async-storage';
import { Timetable } from './types';

const TIMETABLES_KEY = 'TIMETABLES_V1';

export async function saveTimetables(timetables: Timetable[]) {
  await AsyncStorage.setItem(TIMETABLES_KEY, JSON.stringify(timetables));
}

export async function loadTimetables(): Promise<Timetable[]> {
  const json = await AsyncStorage.getItem(TIMETABLES_KEY);
  if (!json) return [];
  try {
    return JSON.parse(json) as Timetable[];
  } catch (e) {
    console.warn('Failed to parse timetables', e);
    return [];
  }
}
