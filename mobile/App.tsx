import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './AppNavigator';
import {
  requestPermissions,
  cancelAllScheduledNotifications,
  scheduleDailyNotification,
} from './src/services/notification';
import { getSchedules, saveSchedules } from './src/services/storage';

export default function App() {
  useEffect(() => {
    const setupNotifications = async () => {
      const permissionsGranted = await requestPermissions();
      if (permissionsGranted) {
        // Clear old notifications and reschedule based on current storage
        await cancelAllScheduledNotifications();
        const storedSchedules = await getSchedules();
        const updatedSchedules = [];
        for (const schedule of storedSchedules) {
          // Only schedule notifications for enabled schedules
          if (schedule.isEnabled) {
            schedule.notificationId = await scheduleDailyNotification(schedule);
          }
          updatedSchedules.push(schedule);
        }
        await saveSchedules(updatedSchedules); // Save schedules with updated notification IDs
      }
    };

    setupNotifications();
  }, []);

  return (
    <>
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}