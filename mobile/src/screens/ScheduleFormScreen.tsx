import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform, Alert } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { AppNavigationProp, RootStackParamList } from '../navigation/types';
import { saveNewSchedule, getSchedules, updateSchedule } from '../services/storage';
import { BellSchedule } from '../types';

type ScheduleFormRouteProp = RouteProp<RootStackParamList, 'ScheduleForm'>;

const ScheduleFormScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const route = useRoute<ScheduleFormRouteProp>();
  const scheduleId = route.params?.scheduleId;

  const [schedule, setSchedule] = useState<Partial<BellSchedule>>({
    name: '',
    time: new Date(),
  });
  const [showPicker, setShowPicker] = useState(Platform.OS === 'ios');

  useEffect(() => {
    const loadScheduleForEdit = async () => {
      if (scheduleId) {
        const allSchedules = await getSchedules();
        const scheduleToEdit = allSchedules.find(s => s.id === scheduleId);
        if (scheduleToEdit) {
          setSchedule(scheduleToEdit);
          navigation.setOptions({ title: 'Edit Bell' });
        }
      } else {
        navigation.setOptions({ title: 'Add New Bell' });
      }
    };

    loadScheduleForEdit();
  }, [scheduleId, navigation]);

  const onTimeChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || schedule.time;
    if (Platform.OS === 'android') {
      setShowPicker(false);
    }
    setSchedule(prev => ({ ...prev, time: currentDate }));
  };

  const handleSave = async () => {
    if (!schedule.name?.trim()) {
      Alert.alert('Validation Error', 'Please enter a name for the bell schedule.');
      return;
    }

    if (scheduleId) {
      // Update existing schedule
      await updateSchedule(schedule as BellSchedule);
    } else {
      // Save new schedule
      await saveNewSchedule({ name: schedule.name, time: schedule.time! });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Bell Name</Text>
      <TextInput
        style={styles.input}
        value={schedule.name}
        onChangeText={text => setSchedule(prev => ({ ...prev, name: text }))}
        placeholder="e.g., Morning Assembly"
      />

      <Text style={styles.label}>Bell Time</Text>
      {Platform.OS === 'android' && (
        <Button onPress={() => setShowPicker(true)} title="Select Time" />
      )}
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={schedule.time!}
          mode="time"
          is24Hour={true}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onTimeChange}
        />
      )}

      <View style={styles.buttonContainer}>
        <Button title="Save Schedule" onPress={handleSave} disabled={!schedule.name} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, marginBottom: 8, fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
  },
  buttonContainer: { marginTop: 30 },
});

export default ScheduleFormScreen;
