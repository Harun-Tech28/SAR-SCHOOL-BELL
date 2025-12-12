import * as Notifications from 'expo-notifications';
import { Timetable, Bell } from '../types';

export async function initNotifications() {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  return finalStatus === 'granted';
}

export async function cancelAllScheduled() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}

function bellContent(bell: Bell, timetableName?: string) {
  return {
    title: bell.label || 'School Bell',
    body: timetableName ? `${timetableName} — ${bell.time}` : bell.time,
    data: { bellId: bell.id },
    sound: 'default'
  } as Notifications.NotificationContentInput;
}

export async function scheduleTimetable(timetable: Timetable) {
  // First clear existing notifications
  await cancelAllScheduled();
  // Schedule each bell as a repeating daily notification at the specified time
  for (const bell of timetable.bells) {
    const parts = bell.time.split(':');
    if (parts.length < 2) continue;
    const hour = Number(parts[0]);
    const minute = Number(parts[1]);
    if (Number.isNaN(hour) || Number.isNaN(minute)) continue;

    const trigger: Notifications.NotificationTriggerInput = {
      hour,
      minute,
      repeats: true
    };

    await Notifications.scheduleNotificationAsync({
      content: {
        ...bellContent(bell, timetable.name),
        data: { ...bellContent(bell, timetable.name).data, audio: bell.audio }
      },
      trigger
    });
  }
}

export async function scheduleAllTimetables(timetables: Timetable[]) {
  await cancelAllScheduled();
  for (const tt of timetables) {
    for (const bell of tt.bells) {
      const parts = bell.time.split(':');
      if (parts.length < 2) continue;
      const hour = Number(parts[0]);
      const minute = Number(parts[1]);
      if (Number.isNaN(hour) || Number.isNaN(minute)) continue;
      const trigger: Notifications.NotificationTriggerInput = {
        hour,
        minute,
        repeats: true
      };
      await Notifications.scheduleNotificationAsync({
        content: {
          ...bellContent(bell, tt.name),
          data: { ...bellContent(bell, tt.name).data, audio: bell.audio }
        },
        trigger
      });
    }
  }
}
