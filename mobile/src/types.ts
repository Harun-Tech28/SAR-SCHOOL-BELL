export interface BellSchedule {
  id: string;
  time: Date;
  name: string;
  sound: string; // URI or identifier for the sound, e.g., 'default'
  notificationId?: string; // The ID returned by expo-notifications when scheduled
  isEnabled: boolean; // To toggle the schedule on or off
}

export type Bell = {
  id: string;
  time: string; // HH:MM
  label?: string;
  audio?: string; // filename in assets/audio
};

export type Timetable = {
  id: string;
  name: string;
  bells: Bell[];
};
