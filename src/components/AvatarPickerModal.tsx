import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

type AvatarPickerModalProps = {
  visible: boolean;
  avatars: string[];
  selected?: string;
  onSelect: (uri: string) => void;
  onClose: () => void;
};

export default function AvatarPickerModal({
  visible,
  avatars,
  selected,
  onSelect,
  onClose,
}: AvatarPickerModalProps) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.title}>Set a profile picture</Text>
          <View style={styles.grid}>
            {avatars.map(uri => {
              const isSelected = selected === uri;
              return (
                <TouchableOpacity
                  key={uri}
                  onPress={() => onSelect(uri)}
                  style={[styles.avatarWrapper, isSelected && styles.avatarSelected]}
                >
                  <Image source={{ uri }} style={styles.avatar} />
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity style={styles.okButton} onPress={onClose}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  avatarWrapper: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'transparent',
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
  },
  avatarSelected: {
    borderColor: '#7c3aed',
  },
  avatar: {
    width: '80%',
    height: '80%',
    borderRadius: 60,
  },
  okButton: {
    marginTop: 8,
    backgroundColor: '#3b82f6',
    borderRadius: 18,
    paddingHorizontal: 32,
    paddingVertical: 10,
  },
  okButtonText: {
    color: '#ffffff',
    fontWeight: '700',
  },
});
