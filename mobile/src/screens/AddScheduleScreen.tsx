import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProp } from '../navigation/types';
import { saveNewSchedule } from '../services/storage';

const AddScheduleScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onTimeChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios'); // On iOS, the picker is a modal
    setDate(currentDate);
  };

  const handleSave = async () => {
    if (!name.trim()) {
      alert('Please enter a name for the bell schedule.');
      return;
    }
    await saveNewSchedule({ name, time: date });
    navigation.goBack(); // Navigate back to the home screen after saving
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Bell Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="e.g., Morning Assembly"
      />

      <Text style={styles.label}>Bell Time</Text>
      {/* On Android, the picker is triggered by a button. On iOS, it can be shown directly. */}
      {Platform.OS === 'android' && (
        <Button onPress={() => setShowPicker(true)} title="Select Time" />
      )}
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onTimeChange}
        />
      )}

      <View style={styles.buttonContainer}>
        <Button title="Save Schedule" onPress={handleSave} disabled={!name} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 30,
  },
});

export default AddScheduleScreen;