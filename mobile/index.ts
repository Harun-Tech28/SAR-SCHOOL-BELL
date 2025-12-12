export interface BellSchedule {
  id: string;
  time: Date;
  name: string;
  sound: string; // URI or identifier for the sound, e.g., 'default'
  notificationId?: string; // The ID returned by expo-notifications when scheduled
  isEnabled: boolean; // To toggle the schedule on or off
}