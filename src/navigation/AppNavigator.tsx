import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import OTPAuthScreen from '../screens/OTPAuthScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import AddScreen from '../screens/AddScreen';
import StaticsScreen from '../screens/StaticsScreen';
import CheckListScreen from '../screens/CheckListScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddToDoListScreen from '../screens/AddToDoListScreen';
import CustomTabBar from './CustomTabBar';

// ✅ Param list in one place
export type RootStackParamList = {
  MainTabs: undefined;
  Details: { userId?: number } | undefined;
  LoginScreen: undefined;
  OPTAuth: undefined;
  AddToDoList: undefined;
  ProfileDetails: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Tasks: undefined;
  Add: undefined;
  Statics: undefined;
  Profile: undefined;
};

// ✅ Reusable prop aliases in one place
export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList, 'MainTabs'>
>;
export type AddScreenProps = BottomTabScreenProps<MainTabParamList, 'Add'>;
export type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;
export type OTPAuthScreenProps = NativeStackScreenProps<RootStackParamList, 'OPTAuth'>;
export type ProfileDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'ProfileDetails'>;


// ✅ Optional: generic helper if you want
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTabs() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tasks" component={CheckListScreen} />
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="Statics" component={StaticsScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('ProfileDetails');
          },
        })}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OPTAuth" component={OTPAuthScreen} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="AddToDoList" component={AddToDoListScreen} />
      <Stack.Screen name="ProfileDetails" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
