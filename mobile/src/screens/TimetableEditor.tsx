import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Alert, Switch } from 'react-native';
import { Timetable, Bell } from '../types';
import { saveTimetables, loadTimetables } from '../storage';
import { v4 as uuidv4 } from 'uuid';

export default function TimetableEditor({ route, navigation }: any) {
  const [timetable, setTimetable] = useState<Timetable>(
    route.params?.timetable || { id: uuidv4(), name: 'New Timetable', bells: [] }
  );
  const [newTime, setNewTime] = useState('08:00');
  const [newLabel, setNewLabel] = useState('');
  const [newAudio, setNewAudio] = useState('bell.wav');
  const [useTTS, setUseTTS] = useState(false);

  useEffect(() => {
    navigation.setOptions({ title: timetable.name });
  }, [timetable.name]);

  async function saveAndExit() {
    const list = await loadTimetables();
    const existingIndex = list.findIndex((t) => t.id === timetable.id);
    let newList: Timetable[];
    if (existingIndex >= 0) {
      list[existingIndex] = timetable;
      newList = list;
    } else {
      newList = [...list, timetable];
    }
    await saveTimetables(newList);
    Alert.alert('Saved', 'Timetable saved');
    navigation.goBack();
  }

  function addBell() {
    const audioValue = useTTS ? 'TTS' : newAudio;
    const bell: Bell = { id: uuidv4(), time: newTime, label: newLabel || 'Bell', audio: audioValue };
    setTimetable({ ...timetable, bells: [...timetable.bells, bell] });
    setNewLabel('');
  }

  function removeBell(id: string) {
    setTimetable({ ...timetable, bells: timetable.bells.filter((b) => b.id !== id) });
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Timetable Name</Text>
      <TextInput value={timetable.name} onChangeText={(t) => setTimetable({ ...timetable, name: t })} style={{ borderWidth: 1, padding: 8, marginBottom: 12 }} />

      <Text>Add Bell (HH:MM)</Text>
      <TextInput value={newTime} onChangeText={setNewTime} style={{ borderWidth: 1, padding: 8, marginBottom: 8 }} />
      <TextInput value={newLabel} onChangeText={setNewLabel} placeholder="Label" style={{ borderWidth: 1, padding: 8, marginBottom: 8 }} />
      <Text>Audio</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <Text>Use Text-to-Speech</Text>
        <Switch value={useTTS} onValueChange={setUseTTS} />
      </View>
      {!useTTS && (
        <TextInput value={newAudio} onChangeText={setNewAudio} placeholder="audio filename" style={{ borderWidth: 1, padding: 8, marginBottom: 8 }} />
      )}
      <Button title="Add Bell" onPress={addBell} />

      <FlatList
        data={timetable.bells}
        keyExtractor={(b) => b.id}
        renderItem={({ item }) => (
          <View style={{ padding: 8, borderBottomWidth: 1 }}>
            <Text>{item.time} — {item.label}</Text>
            <TouchableOpacity onPress={() => removeBell(item.id)}>
              <Text style={{ color: 'red' }}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Button title="Save Timetable" onPress={saveAndExit} />
    </View>
  );
}
