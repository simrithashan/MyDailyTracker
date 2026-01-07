import React from 'react';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TAB_ICONS: Record<string, string> = {
  Home: '🏠',
  Statics: '❤',
  Tasks: '✓',
  Profile: '👤',
};

const TAB_ORDER = ['Home', 'Tasks', 'Add', 'Statics', 'Profile'];

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  if (state.routes.length === 0) {
    return null;
  }
  const insets = useSafeAreaInsets();
  const addRouteIndex = state.routes.findIndex(route => route.name === 'Add');
  const addRoute = addRouteIndex >= 0 ? state.routes[addRouteIndex] : undefined;
  const addIsFocused = state.index === addRouteIndex;

  const handlePress = (routeName: string, routeKey: string, isFocused: boolean) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: routeKey,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(routeName);
    }
  };

  const handleLongPress = (routeKey: string) => {
    navigation.emit({
      type: 'tabLongPress',
      target: routeKey,
    });
  };

  return (
    <View style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 12) }]}>
      <View style={styles.pill}>
        {TAB_ORDER.filter(name => name !== 'Add').map((name, orderIndex, visibleNames) => {
          const route = state.routes.find(r => r.name === name);
          if (!route) {
            return null;
          }
          const index = state.routes.findIndex(r => r.key === route.key);

          const isFocused = state.index === index;
          const icon = TAB_ICONS[route.name] ?? '•';

          return (
            <React.Fragment key={route.key}>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={descriptors[route.key].options.tabBarAccessibilityLabel}
                testID={descriptors[route.key].options.tabBarTestID}
                onPress={() => handlePress(route.name, route.key, isFocused)}
                onLongPress={() => handleLongPress(route.key)}
                style={styles.tabButton}
              >
                <Text style={[styles.icon, isFocused && styles.iconActive]}>{icon}</Text>
              </TouchableOpacity>
              {orderIndex === 1 && <View style={styles.centerGap} />}
            </React.Fragment>
          );
        })}
      </View>

      {addRoute && (
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityState={addIsFocused ? { selected: true } : {}}
          accessibilityLabel={descriptors[addRoute.key].options.tabBarAccessibilityLabel}
          testID={descriptors[addRoute.key].options.tabBarTestID}
          onPress={() => handlePress(addRoute.name, addRoute.key, addIsFocused)}
          onLongPress={() => handleLongPress(addRoute.key)}
          style={styles.centerButtonWrapper}
        >
          <View style={[styles.centerButton, addIsFocused && styles.centerButtonActive]}>
            <Text style={styles.centerIcon}>×</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 24,
    backgroundColor: '#0c1f3f',
  },
  pill: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#0f172a',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
    color: '#6c7891',
  },
  iconActive: {
    color: '#fe2f74',
  },
  centerGap: {
    width: 72,
  },
  centerButtonWrapper: {
    position: 'absolute',
    alignSelf: 'center',
    top: -18,
    shadowColor: '#0f172a',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 12,
  },
  centerButton: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#fe2f74',
    borderWidth: 6,
    borderColor: '#0c1f3f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerButtonActive: {
    backgroundColor: '#ff4d8c',
  },
  centerIcon: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '600',
    marginTop: -4,
  },
});
