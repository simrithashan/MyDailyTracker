import React, {ReactNode} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

type AuthCardProps = ViewProps & {
  children: ReactNode;
};

export default function AuthCard({style, children, ...rest}: AuthCardProps) {
  return (
    <View {...rest} style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: -38,
    marginHorizontal: 16,
    backgroundColor: '#f9feff',
    borderRadius: 32,
    paddingHorizontal: 24,
    paddingVertical: 32,
    shadowColor: '#0f172a',
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: {width: 0, height: 8},
    elevation: 9,
  },
});
