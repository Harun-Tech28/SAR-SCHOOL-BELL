import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  ScheduleForm: { scheduleId?: string }; // Pass scheduleId to edit, or nothing to add
};

export type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;

// This allows us to use the useNavigation hook with type safety
// e.g. const navigation = useNavigation<AppNavigationProp>();