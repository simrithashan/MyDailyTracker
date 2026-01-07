import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import type { DetailsScreenProps } from '../navigation/AppNavigator';
import FocusTimer from '../components/FocusTimer';
import GoalsChecklist from '../components/GoalsChecklist';

export default function DetailsScreen({ navigation }: DetailsScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backArrow}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Habit Details</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editIcon}>✎</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Morning Workout</Text>
          <Text style={styles.cardSubtitle}>Complete 30 min exercise routine</Text>
        </View>

        <View style={styles.row}>
          <View style={[styles.infoCard, styles.rowCard]}>
            <Text style={styles.infoLabel}>Start Date</Text>
            <Text style={styles.infoValue}>Dec 29</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Time</Text>
            <Text style={styles.infoValue}>06:00 AM</Text>
          </View>
        </View>

        <View style={styles.gradientCard}>
          <Text style={styles.gradientLabel}>Days Remaining</Text>
          <Text style={styles.gradientValue}>0</Text>
          <Text style={styles.gradientHelper}>Until Jan 30</Text>
        </View>

        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Overall Progress</Text>
            <Text style={styles.progressCount}>2/4</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
          <Text style={styles.progressHelper}>50% Complete</Text>
        </View>

        <FocusTimer />
        <GoalsChecklist
          goals={[
            { id: '1', label: 'Warm up for 5 minutes', completed: true },
            { id: '2', label: 'Complete cardio session', completed: true },
            { id: '3', label: 'Strength training exercises' },
            { id: '4', label: 'Cool down and stretch' },
          ]}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef3ff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 18,
    color: '#111',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0b1220',
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: {
    fontSize: 16,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 24,
    marginBottom: 20,
    shadowColor: '#0f172a',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
  },
  cardSubtitle: {
    color: '#6c7891',
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 16,
    shadowColor: '#0f172a',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  rowCard: {
    marginRight: 12,
  },
  infoLabel: {
    color: '#667085',
    fontSize: 13,
    marginBottom: 6,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
  },
  gradientCard: {
    backgroundColor: '#5b72ff',
    borderRadius: 26,
    padding: 24,
    marginBottom: 20,
  },
  gradientLabel: {
    color: '#ffffff',
    fontSize: 15,
  },
  gradientValue: {
    fontSize: 48,
    fontWeight: '700',
    color: '#ffffff',
    marginVertical: 4,
  },
  gradientHelper: {
    color: '#e0e7ff',
  },
  progressCard: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 20,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  progressCount: {
    color: '#4f46e5',
    fontWeight: '700',
  },
  progressBar: {
    height: 12,
    backgroundColor: '#e5e7eb',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressFill: {
    width: '50%',
    height: '100%',
    backgroundColor: '#0b1220',
  },
  progressHelper: {
    marginTop: 12,
    color: '#6c7891',
    textAlign: 'center',
  },
});
