import React, {useCallback, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {OtpInput} from 'react-native-otp-entry';
import type {Theme} from 'react-native-otp-entry';

import {login_Screen_Bg} from '../assets/images';
import AuthCard from '../components/AuthCard';
import LongButton from '../components/LongButton';
import type {OTPAuthScreenProps} from '../navigation/AppNavigator';

export default function OTPAuthScreen({navigation}: OTPAuthScreenProps) {
  const [otpValue, setOtpValue] = useState('');
  const isOtpComplete = otpValue.length === 6;

  const handleResend = useCallback(() => {
    // TODO: trigger resend OTP flow
    console.log('Resend OTP tapped');
  }, []);

  const handleSubmit = useCallback(() => {
    if (isOtpComplete) {
      console.log('Submitting OTP:', otpValue);
      navigation.reset({
        index: 0,
        routes: [{name: 'MainTabs'}],
      });
    }
  }, [isOtpComplete, navigation, otpValue]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#cdf6ee" />
      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.scrollContent}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.heroWrapper}>
          <ImageBackground
            source={login_Screen_Bg}
            style={styles.heroImage}
            imageStyle={styles.heroImageBorder}
          />
        </View>

        <AuthCard style={styles.card}>
          <Text style={styles.title}>Verify OTP</Text>
          <Text style={styles.subtitle}>
            Enter the 6-digit code sent to your phone.
          </Text>

          <OtpInput
            numberOfDigits={6}
            autoFocus
            onTextChange={setOtpValue}
            type="numeric"
            focusColor="#1c6ff2"
            theme={otpTheme}
            blurOnFilled
          />

          <LongButton
            label="LOGIN"
            onPress={handleSubmit}
            disabled={!isOtpComplete}
            style={[!isOtpComplete && styles.disabledButton]}
          />

          <TouchableOpacity style={styles.resendLink} onPress={handleResend}>
            <Text style={styles.resendText}>Resend OTP</Text>
          </TouchableOpacity>
        </AuthCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const otpTheme: Theme = {
  containerStyle: {
    width: 'auto',
    alignSelf: 'center' as const,
    marginTop: 24,
  },
  pinCodeContainerStyle: {
    width: 48,
    height: 56,
    borderRadius: 12,
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: '#d1e4fb',
    backgroundColor: '#ffffff',
    shadowColor: '#0f172a',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 4},
    elevation: 3,
  },
  pinCodeTextStyle: {
    fontSize: 20,
    color: '#0f1c4c',
    fontWeight: '600',
  },
  focusedPinCodeContainerStyle: {
    borderColor: '#1c6ff2',
  },
  filledPinCodeContainerStyle: {
    borderColor: '#1c6ff2',
  },
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#cdf6ee',
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#cdf6ee',
    paddingBottom: 32,
  },
  heroWrapper: {
    flex: 1,
  },
  heroImage: {
    height: 360,
  },
  heroImageBorder: {
    resizeMode: 'cover',
  },
  card: {
    marginTop: -24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0f1c4c',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#5e6b87',
    marginTop: 8,
    textAlign: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  resendLink: {
    marginTop: 16,
    alignItems: 'center',
  },
  resendText: {
    color: '#1c6ff2',
    fontSize: 15,
    fontWeight: '600',
  },
});
