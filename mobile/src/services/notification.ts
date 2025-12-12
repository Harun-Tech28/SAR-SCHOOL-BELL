import * as Notifications from 'expo-notifications';
import { BellSchedule } from '../types';

// This must be called so that notifications are displayed when the app is in the foreground.
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true, // We can customize this later to play the bell sound
    shouldSetBadge: false,
  }),
});

/**
 * Requests permission from the user to send notifications.
 */
export const requestPermissions = async (): Promise<boolean> => {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('You need to enable notifications for the school bell to work.');
    return false;
  }
  return true;
};

/**
 * Schedules a single, daily repeating notification for a bell schedule.
 * The notification identifier is the schedule's ID to allow for easy cancellation.
 */
export const scheduleDailyNotification = async (schedule: BellSchedule): Promise<string> => {
  const hours = schedule.time.getHours();
  const minutes = schedule.time.getMinutes();

  const notificationId = await Notifications.scheduleNotificationAsync({
    content: {
      title: 'School Bell',
      body: schedule.name,
      sound: 'default', // TODO: Replace with custom bell sound
    },
    trigger: {
      hour: hours,
      minute: minutes,
      repeats: true,
    },
  });
  console.log(`Scheduled notification for "${schedule.name}" at ${hours}:${minutes}. ID: ${notificationId}`);
  return notificationId;
};

export const cancelAllScheduledNotifications = async (): Promise<void> => {
  await Notifications.cancelAllScheduledNotificationsAsync();
  console.log('All scheduled notifications have been cancelled.');
};

export const cancelSingleScheduledNotification = async (notificationId: string): Promise<void> => {
  await Notifications.cancelScheduledNotificationAsync(notificationId);
  console.log(`Cancelled notification with ID: ${notificationId}`);
};