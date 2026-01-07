import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import type { RootStackScreenProps } from '../navigation/AppNavigator';

type Props = RootStackScreenProps<'AddToDoList'>;

export default function AddToDoListScreen({ navigation }: Props) {
  const [title, setTitle] = useState('');
  const [itemInput, setItemInput] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    if (!itemInput.trim()) {
      return;
    }
    setItems(prev => [...prev, itemInput.trim()]);
    setItemInput('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerLink}>{'<'} Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New List</Text>
        <TouchableOpacity>
          <Text style={styles.headerLink}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.inputCard}>
          <Text style={styles.label}>Title of the List</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter a title"
            value={title}
            onChangeText={setTitle}
            placeholderTextColor="#b5c0d0"
          />
        </View>

        <View style={styles.inputCard}>
          <Text style={styles.label}>List Items</Text>
          <View style={styles.inlineInput}>
            <TextInput
              style={styles.inlineTextInput}
              placeholder="Add an item"
              value={itemInput}
              onChangeText={setItemInput}
              placeholderTextColor="#b5c0d0"
            />
            <TouchableOpacity style={styles.inlineButton} onPress={addItem}>
              <Text style={styles.inlineButtonIcon}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionLabel}>Items</Text>
        <View style={styles.itemsCard}>
          {items.length === 0 ? (
            <Text style={styles.emptyText}>No items added yet.</Text>
          ) : (
            items.map(item => (
              <View style={styles.itemRow} key={item}>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))
          )}
        </View>

        <TouchableOpacity style={styles.addAnother} onPress={addItem}>
          <Text style={styles.addAnotherIcon}>+</Text>
          <Text style={styles.addAnotherText}>Add item</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Save</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ecf2ff',
    paddingTop:20
  },
  container: {
    flex: 1,
    backgroundColor: '#ecf2ff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
  },
  headerLink: {
    fontSize: 16,
    color: '#3b82f6',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  inputCard: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#0f172a',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d6def7',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#0f172a',
  },
  inlineInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d6def7',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  inlineTextInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 6,
    color: '#0f172a',
  },
  inlineButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inlineButtonIcon: {
    color: '#ffffff',
    fontSize: 24,
    marginTop: -2,
  },
  sectionLabel: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 15,
    color: '#6b7280',
  },
  itemsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#0f172a',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 1,
  },
  itemRow: {
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e5e7eb',
  },
  itemText: {
    fontSize: 16,
    color: '#0f172a',
  },
  emptyText: {
    textAlign: 'center',
    color: '#94a3b8',
  },
  addAnother: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  addAnotherIcon: {
    fontSize: 22,
    color: '#3b82f6',
    marginRight: 8,
  },
  addAnotherText: {
    color: '#3b82f6',
    fontWeight: '600',
  },
  primaryButton: {
    margin: 20,
    borderRadius: 26,
    backgroundColor: '#3b82f6',
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
});
