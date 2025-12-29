import React from 'react';
import { View, Text, Button } from 'react-native';
import type { HomeScreenProps } from '../navigation/AppNavigator';

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 12 }}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { userId: 42 })}
      />
    </View>
  );
}
