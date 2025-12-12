import * as Notifications from 'expo-notifications';
import { Audio } from 'expo-av';

let receivedSub: Notifications.Subscription | null = null;
let responseSub: Notifications.Subscription | null = null;
let currentSound: Audio.Sound | null = null;

async function playAudioFile(filename?: string) {
  try {
    if (currentSound) {
      await currentSound.unloadAsync();
      currentSound = null;
    }
    let source: any;
    if (filename && filename.endsWith('bell.wav')) {
      source = require('../../assets/audio/bell.wav');
    }
    if (!source) {
      source = require('../../assets/audio/bell.wav');
    }
    const { sound } = await Audio.Sound.createAsync(source, { shouldPlay: true });
    currentSound = sound;
  } catch (e) {
    console.warn('playAudioFile failed', e);
  }
}

export function registerNotificationPlayback() {
  // Play sound when notification is received in foreground
  receivedSub = Notifications.addNotificationReceivedListener(async (notification) => {
    try {
      const audio = notification.request.content.data?.audio;
      await playAudioFile(audio);
    } catch (e) {
      console.warn('received listener failed', e);
    }
  });

  // Optionally play when user taps notification
  responseSub = Notifications.addNotificationResponseReceivedListener(async (response) => {
    try {
      const audio = response.notification.request.content.data?.audio;
      await playAudioFile(audio);
    } catch (e) {
      console.warn('response listener failed', e);
    }
  });
}

export function unregisterNotificationPlayback() {
  try {
    if (receivedSub) {
      receivedSub.remove();
      receivedSub = null;
    }
    if (responseSub) {
      responseSub.remove();
      responseSub = null;
    }
    if (currentSound) {
      currentSound.unloadAsync();
      currentSound = null;
    }
  } catch (e) {
    console.warn('Failed to unregister playback listeners', e);
  }
}
