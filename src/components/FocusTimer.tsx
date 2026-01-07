import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type FocusTimerProps = {
  initialMs?: number;
};

export default function FocusTimer({ initialMs = 0 }: FocusTimerProps) {
  const [elapsedMs, setElapsedMs] = useState(initialMs);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedMs(prev => prev + 1000);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const formattedTime = new Date(elapsedMs).toISOString().substring(11, 19);

  const toggleTimer = () => {
    setIsRunning(prev => !prev);
  };

  const resetTimer = () => {
    setElapsedMs(0);
    setIsRunning(false);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.gradientTop}>
        <Text style={styles.timerDisplay}>{formattedTime}</Text>
      </View>
      <View style={styles.bottomArea}>
        <View style={styles.controls}>
          <TouchableOpacity style={styles.mainButton} onPress={toggleTimer}>
            <View style={styles.outerGlow}>
              <View style={styles.mainButtonInner}>
                <View style={styles.innerCircle}>
                  {isRunning ? (
                    <View style={styles.pauseWrapper}>
                      <View style={styles.pauseBar} />
                      <View style={styles.pauseBar} />
                    </View>
                  ) : (
                    <View style={styles.playTriangle} />
                  )}
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.restartButton} onPress={resetTimer}>
            <Text style={styles.restartText}>⟲</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    marginTop: 20,
  },
  gradientTop: {
    backgroundColor: '#a78bfa',
    paddingVertical: 34,
    alignItems: 'center',
  },
  bottomArea: {
    backgroundColor: '#fdfdfd',
    // paddingVertical: 14,
    alignItems: 'center',
  },
  timerDisplay: {
    fontSize: 36,
    fontWeight: '700',
    color: '#ffffff',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  mainButton: {
    marginRight: 16,
    bottom:30,
    marginLeft:60,
    // position:'absolute'
  },
  outerGlow: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#a78bfa',
    shadowOpacity: 0.4,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
  },
  mainButtonInner: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#7c3aed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: '#8f68e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playTriangle: {
    width: 0,
    height: 0,
    borderTopWidth: 14,
    borderBottomWidth: 14,
    borderLeftWidth: 20,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#ffffff',
    marginLeft: 4,
  },
  pauseWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 30,
  },
  pauseBar: {
    width: 8,
    height: 28,
    backgroundColor: '#ffffff',
    borderRadius: 4,
  },
  restartButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#a78bfa',
    alignItems: 'center',
    justifyContent: 'center',

  },
  restartText: {
    fontSize: 22,
    color: '#7c3aed',
  },
});
