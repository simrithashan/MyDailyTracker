import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type ProfileComponentProps = {
  greeting?: string;
  name?: string;
  avatarUri?: string;
};

const DEFAULT_AVATAR =
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80';

export default function ProfileComponent({
  greeting = 'Good Morning',
  name = 'Sarah Chen',
  avatarUri = DEFAULT_AVATAR,
}: ProfileComponentProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatarUri }} style={styles.avatar} />
      <View>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e9f2ff',
    padding: 16,
    borderRadius: 24,
    marginBottom: 20,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
  },
  greeting: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3b82f6',
    marginBottom: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0b1c3b',
  },
});
