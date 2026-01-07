import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ToDoListTile from '../components/ToDoListTile';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { MainTabParamList } from '../navigation/AppNavigator';

const DATA = [
  {
    title: 'Today',
    subtitle: '4 / 12 tasks',
    badgeLabel: 'Today',
    badgeColor: '#dcfce7',
    progress: 'Focus on top priorities',
    icon: '📝',
    iconBackground: '#e0f2fe',
  },
  {
    title: 'Shopping List',
    subtitle: '0 / 7 tasks',
    badgeLabel: 'May 1',
    badgeColor: '#feeec3',
    progress: 'Add groceries and supplies',
    icon: '🛒',
    iconBackground: '#fef9c3',
  },
  {
    title: 'Learn React Native',
    subtitle: '6 / 8 tasks',
    badgeLabel: 'Apr 28',
    badgeColor: '#fde68a',
    progress: 'Finish state management section',
    icon: '💻',
    iconBackground: '#e0e7ff',
  },
  {
    title: 'Work Stuff',
    subtitle: '3 / 9 tasks',
    badgeLabel: 'May 3',
    badgeColor: '#bfdbfe',
    progress: 'Prepare slides for meeting',
    icon: '💼',
    iconBackground: '#fee2e2',
  },
  {
    title: 'Groceries',
    subtitle: '17 / 17 tasks',
    badgeLabel: 'May 5',
    badgeColor: '#c7d2fe',
    progress: 'All items purchased',
    icon: '🥕',
    iconBackground: '#dcfce7',
  },
  {
    title: 'Gifts to Buy',
    subtitle: '5 / 6 tasks',
    badgeLabel: 'May 6',
    badgeColor: '#fecdd3',
    progress: 'One gift left to find',
    icon: '🎁',
    iconBackground: '#ffe4e6',
  },
];

type TasksScreenProps = BottomTabScreenProps<MainTabParamList, 'Tasks'>;

export default function CheckListScreen({ navigation }: TasksScreenProps) {
  return (
    <>

          <View style={styles.headerCard}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back!</Text>
            <Text style={styles.title}>To-Do Lists</Text>
          </View>
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddToDoList')}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>Organize your day</Text>
      </View>
    <ScrollView contentContainerStyle={styles.container}>


      <View style={styles.list}>
        {DATA.map(item => (
          <ToDoListTile
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            badgeLabel={item.badgeLabel}
            badgeColor={item.badgeColor}
            progress={item.progress}
            icon={item.icon}
            iconBackground={item.iconBackground}
          />
        ))}
      </View>
    </ScrollView>
        </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 24,
    backgroundColor: '#eff6ff',
  },
  headerCard: {
    paddingTop:40,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#2563eb',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    color: '#93c5fd',
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0f172a',
  },
  addButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2563eb',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 30,
    marginTop: -2,
  },
  subtitle: {
    marginTop: 12,
    color: '#64748b',
  },
  list: {
    marginTop: 24,
  },
});
