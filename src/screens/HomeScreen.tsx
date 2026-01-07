import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import type { HomeScreenProps } from '../navigation/AppNavigator';
import TaskCard from '../components/TaskCard';
import ProgressPieChart from '../components/PieChart';
import ProfileComponent from '../components/ProfileComponent';
import Calendar from '../components/Calendar';

const progressData = [
  { label: 'Completed', value: 65, color: '#1d4ed8' },
  { label: 'In Progress', value: 25, color: '#60a5fa' },
  { label: 'Remaining', value: 10, color: '#dbeafe' },
];

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileComponent />
      <Calendar />
      {/* <ProgressPieChart data={progressData} /> */}
      <Text style={styles.title}>Daily Task</Text>
      <TaskCard
        title="Morning Workout"
        subtitle="Complete 30 min exercise routine"
        category="Fitness"
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { userId: 42 })}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#f5f7fc',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0b1c3b',
  },
});
