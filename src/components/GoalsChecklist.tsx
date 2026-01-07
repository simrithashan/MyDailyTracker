import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type GoalItem = {
  id: string;
  label: string;
  completed?: boolean;
};

type GoalsChecklistProps = {
  title?: string;
  goals: GoalItem[];
};

export default function GoalsChecklist({ title = 'Goals Checklist', goals }: GoalsChecklistProps) {
  const [items, setItems] = useState(goals);

  const toggleGoal = (id: string) => {
    setItems(current =>
      current.map(goal =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal,
      ),
    );
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      {items.map(goal => (
        <TouchableOpacity
          key={goal.id}
          style={styles.row}
          onPress={() => toggleGoal(goal.id)}
          activeOpacity={0.8}
        >
          <View style={[styles.checkbox, goal.completed && styles.checkboxChecked]}>
            {goal.completed && <Text style={styles.checkboxIcon}>✓</Text>}
          </View>
          <Text style={[styles.label, goal.completed && styles.labelCompleted]}>
            {goal.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    padding: 24,
    borderRadius: 28,
    backgroundColor: '#ffffff',
    shadowColor: '#0f172a',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0b1220',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#d1d5db',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  checkboxChecked: {
    backgroundColor: '#0f172a',
    borderColor: '#0f172a',
  },
  checkboxIcon: {
    color: '#ffffff',
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    color: '#111827',
  },
  labelCompleted: {
    color: '#9ca3af',
    textDecorationLine: 'line-through',
  },
});
