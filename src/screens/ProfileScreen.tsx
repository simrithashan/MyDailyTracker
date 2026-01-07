import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import type { ProfileDetailsScreenProps } from '../navigation/AppNavigator';
import AvatarPickerModal from '../components/AvatarPickerModal';

const DEFAULT_AVATAR = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80';
const AVATARS = [
  'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1546539782-6fc531453083?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=200&q=80',
];

export default function ProfileScreen({ navigation }: ProfileDetailsScreenProps) {
  const [avatarUri, setAvatarUri] = useState(DEFAULT_AVATAR);
  const [isPickerVisible, setPickerVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.roundButton}>
          <Text style={styles.roundButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.roundButton}>
          <Text style={styles.roundButtonText}>↗</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.avatarWrapper}>
          <Image source={{ uri: avatarUri }} style={styles.avatar} />
          <TouchableOpacity style={styles.avatarAdd} onPress={() => setPickerVisible(true)}>
            <Text style={styles.avatarAddText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Bessie Cooper</Text>
        <Text style={styles.email}>cooper33@hotmail.com</Text>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, styles.activeCard]}>
            <Text style={styles.statValue}>14</Text>
            <Text style={[styles.statLabel, styles.activeLabel]}>Active</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>06</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>25</Text>
            <Text style={styles.statLabel}>Complete</Text>
          </View>
        </View>
      </View>

      <View style={styles.menuCard}>
        <TouchableOpacity style={styles.menuRow}>
          <View style={[styles.menuIcon, { backgroundColor: '#ede9fe' }]}>
            <Text style={styles.menuIconText}>👤</Text>
          </View>
          <View style={styles.menuTextWrapper}>
            <Text style={styles.menuTitle}>Username</Text>
            <Text style={styles.menuSubtitle}>@cooper_bessie</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow}>
          <View style={[styles.menuIcon, { backgroundColor: '#e0f2fe' }]}>
            <Text style={styles.menuIconText}>🔔</Text>
          </View>
          <View style={styles.menuTextWrapper}>
            <Text style={styles.menuTitle}>Notifications</Text>
            <Text style={styles.menuSubtitle}>Mute, Push, Email</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow}>
          <View style={[styles.menuIcon, { backgroundColor: '#dcfce7' }]}>
            <Text style={styles.menuIconText}>⚙️</Text>
          </View>
          <View style={styles.menuTextWrapper}>
            <Text style={styles.menuTitle}>Settings</Text>
            <Text style={styles.menuSubtitle}>Security, Privacy</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      </View>
      <AvatarPickerModal
        visible={isPickerVisible}
        avatars={AVATARS}
        selected={avatarUri}
        onSelect={uri => setAvatarUri(uri)}
        onClose={() => setPickerVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5fb',
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  roundButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  roundButtonText: {
    fontSize: 18,
    color: '#111827',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
  },
  profileCard: {
    backgroundColor: '#ffffff',
    borderRadius: 32,
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
    shadowColor: '#0f172a',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  avatarAdd: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  avatarAddText: {
    color: '#ffffff',
    fontSize: 20,
    marginTop: -2,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
  },
  email: {
    color: '#9ca3af',
    marginTop: 4,
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  statCard: {
    flex: 1,
    backgroundColor: '#f4f5fb',
    borderRadius: 20,
    paddingVertical: 16,
    marginHorizontal: 6,
    alignItems: 'center',
  },
  activeCard: {
    backgroundColor: '#d8cef9',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
  },
  statLabel: {
    color: '#6b7280',
    marginTop: 6,
  },
  activeLabel: {
    color: '#5c2ef5',
  },
  menuCard: {
    backgroundColor: '#ffffff',
    marginTop: 24,
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: '#0f172a',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e5e8f1',
  },
  menuIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuIconText: {
    fontSize: 18,
  },
  menuTextWrapper: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  menuSubtitle: {
    color: '#9ca3af',
    marginTop: 4,
  },
  chevron: {
    fontSize: 24,
    color: '#d1d5db',
  },
});
