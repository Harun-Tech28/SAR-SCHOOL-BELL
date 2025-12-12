import React from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = {
  value: string; // HH:MM
  onChange: (val: string) => void;
};

export default function TimeInput({ value, onChange }: Props) {
  const [show, setShow] = React.useState(false);
  const [date, setDate] = React.useState(() => {
    const [h, m] = value.split(':').map((s) => parseInt(s, 10));
    const d = new Date();
    d.setHours(isNaN(h) ? 8 : h, isNaN(m) ? 0 : m, 0, 0);
    return d;
  });

  function onChangePicker(_event: any, selected?: Date) {
    setShow(Platform.OS === 'ios');
    if (!selected) return;
    setDate(selected);
    const hh = String(selected.getHours()).padStart(2, '0');
    const mm = String(selected.getMinutes()).padStart(2, '0');
    onChange(`${hh}:${mm}`);
  }

  return (
    <View>
      <Button title={`Time: ${value}`} onPress={() => setShow(true)} />
      {show && (
        <DateTimePicker value={date} mode="time" is24Hour={true} display="default" onChange={onChangePicker} />
      )}
    </View>
  );
}
