import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import OTPAuthScreen from '../screens/OTPAuthScreen';

// ✅ Param list in one place
export type RootStackParamList = {
  Home: undefined;
  Details: { userId?: number } | undefined;
  LoginScreen: undefined;
  OPTAuth: undefined;
};

// ✅ Reusable prop aliases in one place
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;
export type OTPAuthScreenProps = NativeStackScreenProps<RootStackParamList, 'OPTAuth'>;


// ✅ Optional: generic helper if you want
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OPTAuth" component={OTPAuthScreen} />
    </Stack.Navigator>
  );
}
