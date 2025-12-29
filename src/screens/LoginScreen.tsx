import React from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import {login_Screen_Bg} from '../assets/images';
import LongButton from '../components/LongButton';
import AuthCard from '../components/AuthCard';
import { LoginScreenProps } from '../navigation/AppNavigator';
const USER_ICON_URI =
  'https://img.icons8.com/ios-glyphs/30/1e3a8a/user--v1.png';
const PHONE_ICON_URI = 'https://img.icons8.com/ios-glyphs/30/1e3a8a/phone.png';

type FormFieldProps = {
  iconUri: string;
  placeholder: string;
} & Pick<TextInputProps, 'keyboardType'>;

function FormField({iconUri, placeholder, keyboardType}: FormFieldProps) {
  return (
    <View style={styles.fieldWrapper}>
      <View style={styles.fieldIconWrapper}>
        <Image source={{uri: iconUri}} style={styles.fieldIcon} />
      </View>
      <TextInput
        style={styles.fieldInput}
        placeholder={placeholder}
        placeholderTextColor="#7e8ca6"
        keyboardType={keyboardType}
        selectionColor="#1d4ed8"
      />
    </View>
  );
}

export default function LoginScreen({navigation}:LoginScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#66b6ff" />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.select({ios: 'padding', android: undefined})}>
        <ScrollView
          style={styles.flex}
          contentContainerStyle={styles.scrollContent}
          bounces={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.heroWrapper}>
            <ImageBackground
              source={login_Screen_Bg}
              style={styles.heroImage}
              imageStyle={styles.heroImageBorder}>
              {/* <View style={styles.heroScrim} /> */}
            </ImageBackground>
          </View>

          <AuthCard>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>Log in to continue your journey</Text>

            <FormField iconUri={USER_ICON_URI} placeholder="Name" />
            <FormField
              iconUri={PHONE_ICON_URI}
              placeholder="Phone No."
              keyboardType="phone-pad"
            />

            <LongButton label="GET OTP" onPress={()=>navigation.navigate('OPTAuth')} />

            <Text style={styles.helperText}>
              We will send you a one time password to verify your account.
            </Text>
          </AuthCard>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

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
    // paddingHorizontal: 24,
    // paddingTop: 32,
  },
  heroImage: {
    height: 460,

    // borderRadius: 40,
    // overflow: 'hidden',
  },
  heroImageBorder: {
    // borderRadius: 40,
    resizeMode: 'stretch',
  },
  heroScrim: {
    flex: 1,
    backgroundColor: 'rgba(14, 47, 92, 0.05)',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0f1c4c',
  },
  subtitle: {
    fontSize: 16,
    color: '#5e6b87',
    marginTop: 8,
    marginBottom: 32,
  },
  fieldWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d1e4fb',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    marginBottom: 18,
    shadowColor: '#0f172a',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 4},
    elevation: 3,
  },
  fieldIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ebf3ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  fieldIcon: {
    width: 22,
    height: 22,
    tintColor: '#1d4ed8',
    resizeMode: 'contain',
  },
  fieldInput: {
    flex: 1,
    fontSize: 16,
    color: '#0f1c4c',
  },
  helperText: {
    marginTop: 18,
    fontSize: 13,
    color: '#7b869c',
    textAlign: 'center',
  },
});
