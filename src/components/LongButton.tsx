import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type LongButtonProps = TouchableOpacityProps & {
  label: string;
  onPress: ()=>void;
};

export default function LongButton({ label,onPress, style, ...rest }: LongButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.85}
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 12,
    backgroundColor: '#1c6ff2',
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: 'center',
    shadowColor: '#1c6ff2',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#ffffff',
  },
});
