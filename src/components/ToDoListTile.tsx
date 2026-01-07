import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

type ToDoListTileProps = {
  title: string;
  subtitle: string;
  progress?: string;
  badgeLabel?: string;
  icon?: string;
  iconBackground?: string;
  badgeColor?: string;
  style?: ViewStyle;
};

export default function ToDoListTile({
  title,
  subtitle,
  progress,
  badgeLabel,
  icon,
  iconBackground = '#eef2ff',
  badgeColor = '#e5f1ff',
  style,
}: ToDoListTileProps) {
  return (
    <View style={[styles.card, style]}>
      <View style={[styles.iconWrapper, { backgroundColor: iconBackground }]}>
        {icon && <Text style={styles.iconText}>{icon}</Text>}
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        {progress && <Text style={styles.progress}>{progress}</Text>}
      </View>
      {badgeLabel && (
        <View style={[styles.badge, { backgroundColor: badgeColor }]}>
          <Text style={styles.badgeText}>{badgeLabel}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
    shadowColor: '#0f172a',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  iconWrapper: {
    width: 54,
    height: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  iconText: {
    fontSize: 28,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
  },
  subtitle: {
    color: '#6b7280',
    marginTop: 4,
  },
  progress: {
    color: '#2563eb',
    fontWeight: '600',
    marginTop: 4,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  badgeText: {
    color: '#0f172a',
    fontWeight: '600',
  },
});
