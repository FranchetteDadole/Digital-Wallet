import { useState } from 'react';
import {
  View,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  ScrollView,
} from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import {
  Color,
  paddingHorizontalContainer,
  REGEX_EMAIL_VALIDATION,
} from '../constants';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useUser } from '../hooks/useUser';

const SigninScreen = ({ navigation }) => {
  const { signin, userLoading } = useUser();

  const [signinCredentials, setSigninCredentials] = useState({
    email: '',
    password: '',
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
          <View />
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
                Sign in to your account
              </Text>
              <TextInput
                mode="outlined"
                outlineColor={Color.gray}
                label="Email"
                autoComplete="email"
                disabled={userLoading}
                onChangeText={(text) =>
                  setSigninCredentials({ ...signinCredentials, email: text })
                }
                value={signinCredentials.email}
                style={{
                  marginBottom: 12,
                }}
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
                mode="outlined"
                outlineColor={Color.gray}
                theme={{ colors: { primary: Color.primary } }}
                disabled={userLoading}
                label="Password"
                autoComplete="password"
                secureTextEntry
                onChangeText={(text) =>
                  setSigninCredentials({ ...signinCredentials, password: text })
                }
                value={signinCredentials.password}
                style={{
                  marginBottom: 12,
                }}
                left={
                  <TextInput.Icon
                    icon={() => (
                      <AntDesign name="lock" size={24} color={Color.gray} />
                    )}
                  />
                }
              />
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
              onPress={() => navigation.navigate('Signup')}
              disabled={userLoading}>
              <Text
                style={{
                  color: Color.gray,
                  textAlign: 'center',
                  opacity: userLoading ? 0.5 : 1,
                  marginBottom: 12,
                }}>
                {`Don't have an account yet? `}
                <Text style={{ fontWeight: 'bold', color: Color.gray }}>
                  Sign up here.
                </Text>
              </Text>
            </TouchableOpacity>
            <Button
              mode="contained"
              contentStyle={{ height: 48 }}
              style={{
                borderRadius: 100,
                backgroundColor: Color.primary,
              }}
              labelStyle={{
                color: !userLoading ? 'white' : 'rgba(255,255,255, 0.75)',
              }}
              loading={userLoading}
              onPress={async () => {
                if (
                  REGEX_EMAIL_VALIDATION.test(signinCredentials.email) ===
                    false ||
                  !signinCredentials.email
                ) {
                  Alert.alert('Invalid email', 'Please enter a valid email', [
                    { text: 'OK' },
                  ]);
                  return;
                }
                if (!signinCredentials.password) {
                  Alert.alert(
                    'Invalid password',
                    'Please enter a valid password',
                    [{ text: 'OK' }]
                  );
                  return;
                }
                if (signinCredentials.password.length < 8) {
                  Alert.alert(
                    'Invalid password length',
                    'Please enter a password with 8 length and above',
                    [{ text: 'OK' }]
                  );
                  return;
                }

                await signin(
                  signinCredentials.email,
                  signinCredentials.password
                ).catch((error) => {
                  Alert.alert('Oops!', error.message, [{ text: 'OK' }]);
                });
              }}>
              {`Sign in`}
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SigninScreen;
