import React, { useEffect, useRef } from 'react';
import { Button } from 'react-native';
import { Audio } from 'expo-av';

type Props = {
  audioFile?: string; // filename in assets/audio folder
};

export default function BellPlayer({ audioFile }: Props) {
  const soundRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
        soundRef.current = null;
      }
    };
  }, []);

  async function play() {
    try {
      let source: any;
      if (audioFile) {
        // attempt to load from bundled assets
        // Note: require needs a static string; we try a small mapping for the common bell.wav
        if (audioFile.endsWith('bell.wav')) {
          source = require('../../assets/audio/bell.wav');
        }
      }
      if (!source) {
        // fallback to default bell if bundled
        try {
          source = require('../../assets/audio/bell.wav');
        } catch (e) {
          console.warn('No bell asset found to play', e);
          return;
        }
      }

      const { sound } = await Audio.Sound.createAsync(source, { shouldPlay: true });
      soundRef.current = sound;
    } catch (e) {
      console.warn('Failed to play sound', e);
    }
  }

  return <Button title="Play Bell" onPress={play} />;
}
