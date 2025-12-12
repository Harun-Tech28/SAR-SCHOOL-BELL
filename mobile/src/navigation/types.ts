import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  ScheduleForm: { scheduleId?: string } | undefined;
};

export type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;
