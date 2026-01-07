import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PieChartLib from 'react-native-pie-chart';

type Slice = {
  label: string;
  value: number;
  color: string;
};

type ProgressPieChartProps = {
  title?: string;
  data: Slice[];
  size?: number;
  showLegend?: boolean;
};

export default function ProgressPieChart({
  title = "Today's Progress",
  data,
  size = 160,
  showLegend = true,
}: ProgressPieChartProps) {
  const formattedSeries = data.map(slice => ({
    value: slice.value,
    color: slice.color,
  }));

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        <PieChartLib
          widthAndHeight={size}
          series={formattedSeries}
          cover={{ radius: 0.65, color: '#f5f7fc' }}
          padAngle={0.02}
        />
        {showLegend && (
          <View style={styles.legend}>
            {data.map(slice => (
              <View key={slice.label} style={styles.legendRow}>
                <View style={[styles.dot, { backgroundColor: slice.color }]} />
                <Text style={styles.legendLabel}>{slice.label}</Text>
                <Text style={styles.legendValue}>{slice.value}%</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 24,
    shadowColor: '#0f172a',
    shadowOpacity: 0.1,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0b1c3b',
    marginBottom: 12,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legend: {
    marginLeft: 24,
    flex: 1,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendLabel: {
    flex: 1,
    color: '#4b587a',
    fontSize: 15,
  },
  legendValue: {
    fontWeight: '600',
    color: '#0b1c3b',
  },
});
