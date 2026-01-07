import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

type TaskCardProps = {
  title: string;
  subtitle: string;
  category: string;
  icon?: string;
  active?: boolean;
};

export default function TaskCard({
  title,
  subtitle,
  category,
  icon = '💪',
  active = false,
}: TaskCardProps) {
  const [isEnabled, setIsEnabled] = useState(active);

  return (
    <View style={styles.wrapper}>
      <View style={styles.infoSection}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>{icon}</Text>
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <View style={styles.tag}>
            <Text style={styles.tagIcon}>⚡</Text>
            <Text style={styles.tagText}>{category}</Text>
          </View>
        </View>
      </View>

      <Switch
        value={isEnabled}
        onValueChange={setIsEnabled}
        trackColor={{ false: '#cbced4', true: '#009951' }}
        thumbColor="#ffffff"
        ios_backgroundColor="#ffffff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 26,
    shadowColor: '#0f172a',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
    marginVertical: 12,
  },
  infoSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e4f1ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 18,
  },
  icon: {
    fontSize: 34,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0b1c3b',
  },
  subtitle: {
    color: '#6c7891',
    marginTop: 4,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#dff0ff',
  },
  tagIcon: {
    marginRight: 4,
    fontSize: 14,
  },
  tagText: {
    color: '#1d5ef5',
    fontWeight: '600',
  },
});
