import React from 'react';
import { View, Text, Button } from 'react-native';
import type { DetailsScreenProps } from '../navigation/AppNavigator';

export default function DetailsScreen({ navigation, route }: DetailsScreenProps) {
  const userId = route.params?.userId;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 12 }}>Details Screen</Text>

      {userId !== undefined && (
        <Text style={{ marginBottom: 12 }}>User ID: {userId}</Text>
      )}

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
