import React, { FC, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  WeekCalendar,
  DateData,
  MarkedDates,
  CalendarProvider,
} from "react-native-calendars";

const ACCENT = "#0078F8";

interface CalendarProps {
  /** Initial selected date (defaults to today) */
  initialDate?: Date;

  /** Callback when date changes (yyyy-mm-dd) */
  onDateChange?: (date: string) => void;

  /** Start week on Monday (1) or Sunday (0). Default: Monday */
  firstDay?: 0 | 1;
}

const Calendar: FC<CalendarProps> = ({
  initialDate = new Date(),
  onDateChange,
  firstDay = 1,
}) => {
  const todayStr = useMemo(() => formatDate(new Date()), []);
  const initialStr = useMemo(() => formatDate(initialDate), [initialDate]);

  const [selectedDate, setSelectedDate] = useState<string>(initialStr);

  const markedDates: MarkedDates = useMemo(() => {
    const marks: MarkedDates = {
      [selectedDate]: {
        selected: true,
        selectedColor: ACCENT,
        selectedTextColor: "#FFFFFF",
      },
    };

    // Keep subtle highlight for "today" if another date is selected
    if (selectedDate !== todayStr) {
      marks[todayStr] = {
        customStyles: {
          container: {
            borderWidth: 2,
            borderColor: ACCENT,
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
          },
          text: {
            color: "#111827",
            fontWeight: "700",
          },
        },
      };
    }

    return marks;
  }, [selectedDate, todayStr]);

  const handleDateChange = (dateString: string) => {
    setSelectedDate(dateString);
    onDateChange?.(dateString);
  };

  const handleDayPress = (day: DateData) => {
    handleDateChange(day.dateString);
  };

  return (
    <View style={styles.wrapper}>
      <CalendarProvider
        date={selectedDate}
        onDateChanged={(date) => handleDateChange(date)}
      >
        <WeekCalendar
          current={selectedDate}
          firstDay={firstDay}
          markedDates={markedDates}
          markingType="custom"
          onDayPress={handleDayPress}
          hideDayNames={false}
          theme={{
            backgroundColor: "transparent",
            calendarBackground: "transparent",
            textSectionTitleColor: "#6B7280",
            dayTextColor: "#111827",
            textDisabledColor: "#CBD5E1",
            monthTextColor: "#111827",
            textDayFontWeight: "700",
            textDayHeaderFontWeight: "600",
            textDayFontSize: 18,
            textDayHeaderFontSize: 16,

            // Spacing between day pills
            "stylesheet.calendar.main": {
              week: {
                marginTop: 8,
                marginBottom: 8,
                flexDirection: "row",
                justifyContent: "space-around",
              },
            },
          }}
          style={styles.calendar}
        />
      </CalendarProvider>
    </View>
  );
};

export default Calendar;

/* ------------------ helpers ------------------ */

function formatDate(date: Date): string {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

/* ------------------ styles ------------------ */

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 8,
  },
  calendar: {
    backgroundColor: "transparent",
  },
});
