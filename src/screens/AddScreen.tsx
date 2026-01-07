import React, { useState, useCallback } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Switch,
  ScrollView,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import type { AddScreenProps } from '../navigation/AppNavigator';

export default function AddScreen({ navigation }: AddScreenProps) {
  const [modalVisible, setModalVisible] = useState(true);
  const [habitName, setHabitName] = useState('Morning Meditation');
  const [goalsEnabled, setGoalsEnabled] = useState(false);
  const [goals, setGoals] = useState<{ id: string; value: string }[]>([]);

  useFocusEffect(
    useCallback(() => {
      setModalVisible(true);

      return () => {
        setModalVisible(false);
      };
    }, []),
  );

  const closeModal = useCallback(() => {
    setModalVisible(false);
    navigation.navigate('Home');
  }, [navigation]);

  const handleAddGoal = useCallback(() => {
    setGoals(current => {
      if (current.length >= 10) {
        return current;
      }
      return [...current, { id: Date.now().toString(), value: '' }];
    });
  }, []);

  const handleGoalChange = useCallback((id: string, text: string) => {
    setGoals(current => current.map(goal => (goal.id === id ? { ...goal, value: text } : goal)));
  }, []);

  const handleRemoveGoal = useCallback((id: string) => {
    setGoals(current => current.filter(goal => goal.id !== id));
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.backdrop}>
          <View style={styles.sheet}>
            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>New Habit</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeText}>×</Text>
              </TouchableOpacity>
            </View>

            {/* <View style={styles.scrollArea}> */}
              <ScrollView
                contentContainerStyle={styles.content}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
              >
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
                  }}
                  style={styles.heroImage}
                />

                <Text style={styles.sectionLabel}>Name your habit</Text>
                <TextInput
                  value={habitName}
                  onChangeText={setHabitName}
                  placeholder="Morning Meditation"
                  style={styles.input}
                  placeholderTextColor="#c4a98b"
                />

                <View style={styles.toggleRow}>
                  <View>
                    <Text style={styles.sectionLabel}>Set goals under this habit</Text>
                    <Text style={styles.helperText}>Optional (up to 10 goals)</Text>
                  </View>
                  <Switch
                    value={goalsEnabled}
                    onValueChange={setGoalsEnabled}
                    trackColor={{ true: '#facc15', false: '#e2e8f0' }}
                    thumbColor={goalsEnabled ? '#fff' : '#fff'}
                  />
                </View>
                {goalsEnabled && (
                  <View>
                    {goals.map((goal, index) => (
                      <View key={goal.id} style={styles.goalRow}>
                        <TextInput
                          value={goal.value}
                          onChangeText={text => handleGoalChange(goal.id, text)}
                          placeholder={`Goal ${index + 1}`}
                          style={styles.goalInput}
                          placeholderTextColor="#c4a98b"
                        />
                        <TouchableOpacity style={styles.deleteButton} onPress={() => handleRemoveGoal(goal.id)}>
                          <Text style={styles.deleteIcon}>🗑️</Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                    {goals.length < 10 && (
                      <TouchableOpacity style={styles.addGoalButton} onPress={handleAddGoal}>
                        <Text style={styles.addGoalIcon}>＋</Text>
                        <Text style={styles.addGoalText}>Add goal</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                )}

                <Text style={[styles.sectionLabel, styles.scheduleLabel]}>Schedule habit</Text>
                <View style={styles.actionRow}>
                  <TouchableOpacity style={styles.actionCard}>
                    <Text style={styles.actionIcon}>📅</Text>
                    <Text style={styles.actionText}>Set Date</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionCard}>
                    <Text style={styles.actionIcon}>⏰</Text>
                    <Text style={styles.actionText}>Set Time</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.helperText}>Date is required</Text>
              </ScrollView>
            {/* </View> */}

            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Set Habit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.4)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#fff6e9',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    height: '90%',
    paddingBottom: 24,
  },
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 18,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#f1d7b1',
  },
  sheetTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1c1917',
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fef3c7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    fontSize: 26,
    marginTop: -6,
    color: '#a16207',
  },
  scrollArea: {
    flex: 1,
  },
  content: {
    // flex:1,
    paddingHorizontal: 24,
    paddingBottom: 48,
  },
  heroImage: {
    width: '100%',
    height: 180,
    borderRadius: 24,
    marginVertical: 16,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1c1917',
  },
  input: {
    borderWidth: 1,
    borderColor: '#f4c78b',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
    color: '#1c1917',
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  helperText: {
    color: '#94a3b8',
    marginTop: 4,
  },
  goalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  goalInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#f4c78b',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    color: '#1c1917',
  },
  deleteButton: {
    marginLeft: 12,
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#fee2e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteIcon: {
    fontSize: 18,
  },
  addGoalButton: {
    borderWidth: 2,
    borderColor: '#f97316',
    borderStyle: 'dashed',
    borderRadius: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  addGoalIcon: {
    color: '#f97316',
    fontSize: 18,
    fontWeight: '700',
    marginRight: 6,
  },
  addGoalText: {
    color: '#f97316',
    fontWeight: '700',
    fontSize: 16,
  },
  scheduleLabel: {
    marginTop: 12,
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: 12,
    marginHorizontal: -6,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
    shadowColor: '#fbbf24',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  actionIcon: {
    fontSize: 28,
    marginBottom: 6,
  },
  actionText: {
    fontWeight: '600',
    color: '#1c1917',
  },
  primaryButton: {
    marginHorizontal: 24,
    backgroundColor: '#fef3c7',
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: 'center',
    opacity: 0.7,
  },
  primaryButtonText: {
    color: '#a16207',
    fontWeight: '700',
    fontSize: 16,
  },
});
