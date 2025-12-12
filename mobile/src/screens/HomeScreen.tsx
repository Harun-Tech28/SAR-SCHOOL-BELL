import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, Button, StyleSheet, SafeAreaView, Pressable, Switch } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { BellSchedule } from '../types';
import { AppNavigationProp } from '../navigation/types';
import { getSchedules, deleteSchedule, toggleSchedule } from '../services/storage';

const HomeScreen = () => {
  const [schedules, setSchedules] = useState<BellSchedule[]>([]);
  const navigation = useNavigation<AppNavigationProp>();

  // useFocusEffect runs every time the screen comes into focus.
  // This ensures the list is updated after adding a new schedule.
  useFocusEffect(
    useCallback(() => {
      const loadSchedules = async () => {
        const loadedSchedules = await getSchedules();
        // Sort schedules purely by time of day
        loadedSchedules.sort((a, b) => {
          const timeA = a.time.getHours() * 60 + a.time.getMinutes();
          const timeB = b.time.getHours() * 60 + b.time.getMinutes();
          return timeA - timeB;
        });
        setSchedules(loadedSchedules);
      };
      loadSchedules();
    }, [])
  );

  const handleDelete = async (id: string) => {
    await deleteSchedule(id);
    // Refresh the list from state to avoid another async call
    setSchedules(prevSchedules => prevSchedules.filter(s => s.id !== id));
  };

  const handleToggle = async (id: string) => {
    await toggleSchedule(id);
    // Refresh the list from state to show visual change
    setSchedules(prevSchedules =>
      prevSchedules.map(s => (s.id === id ? { ...s, isEnabled: !s.isEnabled } : s))
    );
  };

  const renderItem = ({ item }: { item: BellSchedule }) => (
    <View style={styles.item}>
      <View>
        <Text style={[styles.itemName, !item.isEnabled && styles.disabledText]}>{item.name}</Text>
        <Text style={[styles.itemTime, !item.isEnabled && styles.disabledText]}>{item.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
      </View>
      <View style={styles.actions}>
        <Switch value={item.isEnabled} onValueChange={() => handleToggle(item.id)} />
        <Pressable onPress={() => navigation.navigate('ScheduleForm', { scheduleId: item.id })} style={styles.editButton}><Text>Edit</Text></Pressable>
        <Button title="Delete" onPress={() => handleDelete(item.id)} color="red" />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={schedules}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No bell schedules found. Tap below to add one!</Text>}
      />
      <Button
        title="Add New Bell"
        onPress={() => navigation.navigate('ScheduleForm', {})}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  item: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  itemName: { fontSize: 16 },
  itemTime: { fontSize: 16, color: '#666' },
  emptyText: { textAlign: 'center', marginTop: 50, fontSize: 16 },
  actions: { flexDirection: 'row', alignItems: 'center' },
  editButton: { marginHorizontal: 10, padding: 5 },
  disabledText: { color: '#aaa', textDecorationLine: 'line-through' },
});

export default HomeScreen;