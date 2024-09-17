import { useState } from 'react';
import {
  View,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
} from 'react-native';
import { TextInput, Button, Checkbox, Text } from 'react-native-paper';
import { Color, paddingHorizontalContainer } from '../constants';
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { REGEX_EMAIL_VALIDATION } from '../constants';
import { useUser } from '../hooks/useUser';

const SignupScreen = ({ navigation }) => {
  const { signup, userLoading } = useUser();

  const [signupCredentials, setSignupCredentials] = useState({
    firstName: '',
    lastName: '',
    // birthday: '',
    email: '',
    mobileNo: '',
    password: '',
    confirmPassword: '',
    agreeOnPrivacyPolicy: false,
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
      style={{
        flex: 1,
      }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <ScrollView
            style={{
              flexShrink: 1,
              height: '100%',
              paddingHorizontal: paddingHorizontalContainer,
            }}>
            <View style={{ marginVertical: 24 }}>
              <Text
                variant="titleLarge"
                style={{
                  fontWeight: 'bold',
                  marginBottom: 12,
                  textAlign: 'center',
                }}>
                Sign up to your account
              </Text>
              <TextInput
                mode="outlined"
                label="First name"
                autoComplete="name-given"
                disabled={userLoading}
                onChangeText={(text) =>
                  setSignupCredentials({
                    ...signupCredentials,
                    firstName: text,
                  })
                }
                value={signupCredentials.firstName}
                style={{
                  width: '100%',
                  marginBottom: 12,
                }}
                outlineColor={Color.gray}
                theme={{ colors: { primary: Color.primary } }}
                left={
                  <TextInput.Icon
                    icon={() => (
                      <MaterialCommunityIcons
                        name="format-letter-case"
                        size={24}
                        color={Color.gray}
                      />
                    )}
                  />
                }
              />
              <TextInput
                label="Last name"
                autoComplete="name-family"
                onChangeText={(text) =>
                  setSignupCredentials({ ...signupCredentials, lastName: text })
                }
                disabled={userLoading}
                value={signupCredentials.lastName}
                mode="outlined"
                style={{
                  width: '100%',
                  marginBottom: 12,
                }}
                outlineColor={Color.gray}
                theme={{ colors: { primary: Color.primary } }}
                left={
                  <TextInput.Icon
                    icon={() => (
                      <MaterialCommunityIcons
                        name="format-letter-case"
                        size={24}
                        color={Color.gray}
                      />
                    )}
                  />
                }
              />
              <TextInput
                mode="outlined"
                outlineColor={Color.gray}
                theme={{ colors: { primary: Color.primary } }}
                label="Mobile number"
                keyboardType="phone-pad"
                autoComplete="tel-device"
                onChangeText={(text) =>
                  setSignupCredentials({ ...signupCredentials, mobileNo: text })
                }
                minLength={11}
                disabled={userLoading}
                value={signupCredentials.mobileNo}
                style={{
                  width: '100%',
                  marginBottom: 12,
                }}
                left={
                  <TextInput.Icon
                    icon={() => (
                      <MaterialCommunityIcons
                        name="phone"
                        size={24}
                        color={Color.gray}
                      />
                    )}
                  />
                }
              />

              <TextInput
                label="Email"
                autoComplete="email"
                onChangeText={(text) =>
                  setSignupCredentials({ ...signupCredentials, email: text })
                }
                disabled={userLoading}
                value={signupCredentials.email}
                mode="outlined"
                style={{
                  width: '100%',
                  marginBottom: 12,
                }}
                outlineColor={Color.gray}
                theme={{ colors: { primary: Color.primary } }}
                left={
                  <TextInput.Icon
                    icon={() => (
                      <Entypo name="email" size={24} color={Color.gray} />
                    )}
                  />
                }
              />
              <TextInput
                label="Password"
                secureTextEntry={true}
                disabled={userLoading}
                autoComplete="password"
                onChangeText={(text) =>
                  setSignupCredentials({ ...signupCredentials, password: text })
                }
                minLength={8}
                value={signupCredentials.password}
                mode="outlined"
                style={{
                  width: '100%',
                  marginBottom: 12,
                }}
                outlineColor={Color.gray}
                theme={{ colors: { primary: Color.primary } }}
                left={
                  <TextInput.Icon
                    icon={() => (
                      <AntDesign name="lock" size={24} color={Color.gray} />
                    )}
                  />
                }
              />
              <TextInput
                label="Confirm Password"
                secureTextEntry={true}
                disabled={userLoading}
                autoComplete="password"
                onChangeText={(text) =>
                  setSignupCredentials({
                    ...signupCredentials,
                    confirmPassword: text,
                  })
                }
                value={signupCredentials.confirmPassword}
                minLength={8}
                mode="outlined"
                style={{
                  width: '100%',
                }}
                outlineColor={Color.gray}
                theme={{ colors: { primary: Color.primary } }}
                left={
                  <TextInput.Icon
                    icon={() => (
                      <AntDesign name="lock" size={24} color={Color.gray} />
                    )}
                  />
                }
              />
              <View style={{ marginBottom: 12 }}>
                <Checkbox.Item
                  label="You agree to the terms of use and acknowledge the privacy policy."
                  position="leading"
                  status={
                    signupCredentials.agreeOnPrivacyPolicy
                      ? 'checked'
                      : 'unchecked'
                  }
                  color={Color.primary}
                  disabled={userLoading}
                  onPress={() => {
                    !userLoading &&
                      setSignupCredentials({
                        ...signupCredentials,
                        agreeOnPrivacyPolicy:
                          !signupCredentials.agreeOnPrivacyPolicy,
                      });
                  }}
                  labelStyle={{
                    fontSize: 12,
                    textAlign: 'left',
                    lineHeight: 16,
                  }}
                />
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              position: 'relative',
              marginTop: 32,
              marginBottom: 32,
              marginHorizontal: paddingHorizontalContainer,
            }}>
            <TouchableOpacity
              style={{ position: 'absolute', top: -28, width: '100%' }}
              onPress={() => navigation.navigate('Signin')}
              disabled={userLoading}>
              <Text
                style={{
                  color: Color.gray,
                  opacity: userLoading ? 0.5 : 1,
                  textAlign: 'center',
                  width: '100%',
                }}>
                {`Already have an account? `}
                <Text style={{ fontWeight: 'bold', color: Color.gray }}>
                  Sign in here.
                </Text>
              </Text>
            </TouchableOpacity>
            <Button
              mode="contained"
              contentStyle={{ height: 48 }}
              style={{
                width: '100%',
                borderRadius: 100,
                backgroundColor: Color.primary,
              }}
              labelStyle={{
                color: !userLoading ? 'white' : 'rgba(255,255,255, 0.75)',
              }}
              loading={userLoading}
              onPress={async () => {
                if (!signupCredentials.firstName) {
                  Alert.alert('Missing first name', 'First name is required', [
                    { text: 'OK' },
                  ]);
                  return;
                }
                if (!signupCredentials.lastName) {
                  Alert.alert('Missing last name', 'Last name is required', [
                    { text: 'OK' },
                  ]);
                  return;
                }
                if (!signupCredentials.mobileNo) {
                  Alert.alert(
                    'Invalid.',
                    'Please enter your mobile number or amount.',
                    [{ text: 'OK' }]
                  );
                  return;
                }

                if (signupCredentials.mobileNo.length !== 11) {
                  Alert.alert(
                    'Invalid mobile number.',
                    'Please enter a valid phone number.',
                    [{ text: 'OK' }]
                  );
                  return;
                }
                if (
                  REGEX_EMAIL_VALIDATION.test(signupCredentials.email) === false
                ) {
                  Alert.alert('Invalid email', 'Please enter a valid email', [
                    { text: 'OK' },
                  ]);
                  return;
                }
                if (!signupCredentials.password) {
                  Alert.alert(
                    'Invalid password',
                    'Please enter a valid password',
                    [{ text: 'OK' }]
                  );
                  return;
                }
                if (signupCredentials.password.length < 8) {
                  Alert.alert(
                    'Invalid password length',
                    'Please enter a password with 8 length and above',
                    [{ text: 'OK' }]
                  );
                  return;
                }
                if (!signupCredentials.confirmPassword) {
                  Alert.alert(
                    'Invalid password',
                    'Please enter a valid password',
                    [{ text: 'OK' }]
                  );
                  return;
                }
                if (
                  signupCredentials.password !==
                  signupCredentials.confirmPassword
                ) {
                  Alert.alert(
                    'Password Not Same',
                    'Password and confirm password is not the same.',
                    [{ text: 'OK' }]
                  );
                  return;
                }
                if (!signupCredentials.agreeOnPrivacyPolicy) {
                  Alert.alert(
                    'Agree on terms of use and privacy policy.',
                    'You must agree on terms of use and privacy policy.',
                    [{ text: 'OK' }]
                  );
                  return;
                }

                const {
                  agreeOnPrivacyPolicy,
                  confirmPassword,
                  ...userNoAgree
                } = signupCredentials;

                await signup(userNoAgree)
                  .then(() => {
                    setSignupCredentials({
                      firstName: '',
                      lastName: '',
                      birthday: '',
                      email: '',
                      password: '',
                      agreeOnPrivacyPolicy: false,
                    });
                  })
                  .catch((error) => {
                    Alert.alert('Oops!', error.message, [
                      {
                        text: 'Go to login',
                        onPress: () => navigation.navigate('Signin'),
                      },
                      {
                        text: 'OK',
                      },
                    ]);
                  });
              }}>
              {`Sign up`}
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
