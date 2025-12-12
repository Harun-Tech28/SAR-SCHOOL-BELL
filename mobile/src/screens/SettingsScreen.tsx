import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { cancelAllScheduled } from '../services/notificationService';

export default function SettingsScreen() {
  return (
    <View style={{flex:1, padding:16}}>
      <Text style={{fontSize:18, fontWeight:'600', marginBottom:12}}>Settings</Text>
      <Button title="Cancel All Scheduled Alarms" onPress={async () => {
        await cancelAllScheduled();
        Alert.alert('Cancelled', 'All scheduled notifications cancelled');
      }} />
      <Text style={{marginTop:12}}>Notes: Background scheduling uses local notifications. On iOS, exact background execution is restricted; this app schedules repeating notifications for listed bell times.</Text>
    </View>
  );
}
