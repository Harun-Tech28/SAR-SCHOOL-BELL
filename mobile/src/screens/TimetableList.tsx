import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, Alert } from 'react-native';
import { Timetable } from '../types';
import { loadTimetables, saveTimetables } from '../storage';
import { scheduleAllTimetables, initNotifications, cancelAllScheduled } from '../services/notificationService';
import { useIsFocused } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';

export default function TimetableList({ navigation }: any) {
  const [timetables, setTimetables] = useState<Timetable[]>([]);
  const focused = useIsFocused();

  useEffect(() => {
    (async () => {
      const list = await loadTimetables();
      setTimetables(list);
    })();
  }, [focused]);

  async function addSample() {
    const sample: Timetable = {
      id: uuidv4(),
      name: 'Sample Timetable',
      bells: [
        { id: uuidv4(), time: '08:00', label: 'Morning assembly', audio: 'bell.wav' },
        { id: uuidv4(), time: '12:30', label: 'Lunch', audio: 'bell.wav' }
      ]
    };
    const newList = [...timetables, sample];
    setTimetables(newList);
    await saveTimetables(newList);
    Alert.alert('Added', 'Sample timetable added');
  }

  async function exportJson() {
    const { exportTimetablesJson } = await import('../services/importExport');
    try {
      const path = await exportTimetablesJson(timetables);
      Alert.alert('Exported', `Saved to ${path}`);
    } catch (e) {
      Alert.alert('Export failed', String(e));
    }
  }

  async function importJson() {
    // quick import from the bundled sample for demo
    try {
      const sample = require('../sample-timetables.json');
      const newList = [...timetables, ...sample];
      setTimetables(newList);
      await saveTimetables(newList);
      Alert.alert('Imported', `Imported ${sample.length} timetables`);
    } catch (e) {
      Alert.alert('Import failed', String(e));
    }
  }

  async function scheduleAll() {
    const ok = await initNotifications();
    if (!ok) {
      Alert.alert('Notifications disabled', 'Please allow notifications to schedule alarms');
      return;
    }
    await cancelAllScheduled();
    await scheduleAllTimetables(timetables);
    Alert.alert('Scheduled', 'All timetables scheduled (notifications)');
  }

  function openEdit(item: Timetable) {
    navigation.navigate('TimetableEditor', { timetable: item });
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="Add Sample Timetable" onPress={addSample} />
      <Button title="Export Timetables (JSON)" onPress={exportJson} />
      <Button title="Import Sample Timetables" onPress={importJson} />
      <Button title="Schedule All Timetables" onPress={scheduleAll} />
      <FlatList
        data={timetables}
        keyExtractor={(it) => it.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openEdit(item)} style={{ padding: 12, borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.name}</Text>
            <Text>{item.bells.length} bells</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
