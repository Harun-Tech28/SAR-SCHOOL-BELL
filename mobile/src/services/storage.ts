import AsyncStorage from '@react-native-async-storage/async-storage';
import { BellSchedule } from '../types';
import { scheduleDailyNotification, cancelSingleScheduledNotification } from './notification';

const STORAGE_KEY = '@SchoolBell:schedules';

/**
 * Fetches all bell schedules from AsyncStorage.
 */
export const getSchedules = async (): Promise<BellSchedule[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    if (jsonValue !== null) {
      // AsyncStorage stores dates as ISO strings, so we need to convert them back to Date objects.
      const schedules = JSON.parse(jsonValue) as any[];
      return schedules.map(s => ({ ...s, time: new Date(s.time) }));
    }
  } catch (e) {
    console.error('Failed to fetch schedules from storage.', e);
  }
  return [];
};

/**
 * Saves an array of bell schedules to AsyncStorage.
 */
export const saveSchedules = async (schedules: BellSchedule[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(schedules));
  } catch (e) {
    console.error('Failed to save schedules to storage.', e);
  }
};

/**
 * Saves a new bell schedule to the list in AsyncStorage.
 * Returns the newly created BellSchedule object including its notificationId.
 */
export const saveNewSchedule = async (scheduleData: { name: string; time: Date }): Promise<BellSchedule | null> => {
  try {
    const existingSchedules = await getSchedules();
    const newSchedule: BellSchedule = { ...scheduleData, id: Date.now().toString(), sound: 'default', isEnabled: true };
    // Schedule the notification for the new item
    newSchedule.notificationId = await scheduleDailyNotification(newSchedule);
    const updatedSchedules = [...existingSchedules, newSchedule];
    await saveSchedules(updatedSchedules);
    return newSchedule;
  } catch (e) {
    console.error('Failed to save the new schedule or schedule its notification.', e);
    return null;
  }
};

/**
 * Toggles the isEnabled status of a schedule and updates its notification.
 */
export const toggleSchedule = async (id: string): Promise<void> => {
  try {
    const schedules = await getSchedules();
    const scheduleIndex = schedules.findIndex(s => s.id === id);
    if (scheduleIndex === -1) return;

    const schedule = schedules[scheduleIndex];
    schedule.isEnabled = !schedule.isEnabled;

    // Cancel previous notification if it exists
    if (schedule.notificationId) {
      await cancelSingleScheduledNotification(schedule.notificationId);
      schedule.notificationId = undefined;
    }

    // If the schedule is now enabled, schedule a new notification
    if (schedule.isEnabled) {
      schedule.notificationId = await scheduleDailyNotification(schedule);
    }

    await saveSchedules(schedules);
  } catch (e) {
    console.error('Failed to toggle schedule status.', e);
  }
};

/**
 * Updates an existing bell schedule, cancels its old notification, and schedules a new one.
 */
export const updateSchedule = async (updatedSchedule: BellSchedule): Promise<void> => {
  try {
    const existingSchedules = await getSchedules();
    const scheduleIndex = existingSchedules.findIndex(s => s.id === updatedSchedule.id);

    if (scheduleIndex === -1) {
      console.error('Schedule to update not found.');
      return;
    }

    const oldSchedule = existingSchedules[scheduleIndex];
    if (oldSchedule.notificationId) {
      await cancelSingleScheduledNotification(oldSchedule.notificationId);
    }

    updatedSchedule.notificationId = await scheduleDailyNotification(updatedSchedule);
    existingSchedules[scheduleIndex] = updatedSchedule;
    await saveSchedules(existingSchedules);
  } catch (e) {
    console.error('Failed to update the schedule.', e);
  }
};

/**
 * Deletes a bell schedule from AsyncStorage and cancels its notification.
 */
export const deleteSchedule = async (id: string): Promise<void> => {
  try {
    const existingSchedules = await getSchedules();
    const scheduleToDelete = existingSchedules.find(s => s.id === id);
    if (scheduleToDelete && scheduleToDelete.notificationId) {
      await cancelSingleScheduledNotification(scheduleToDelete.notificationId);
    }
    const updatedSchedules = existingSchedules.filter(s => s.id !== id);
    await saveSchedules(updatedSchedules);
  } catch (e) {
    console.error('Failed to delete schedule or cancel its notification.', e);
  }
};