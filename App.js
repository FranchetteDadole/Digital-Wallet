import SigninScreen from './src/screens/SigninScreen';
import HomeScreen from './src/screens/HomeScreen';
import SignupScreen from './src/screens/SignupScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import SendPaymentScreen from './src/screens/SendPaymentScreen';
import WidgetScreen from './src/screens/WidgetScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Color } from './src/constants';
import { StatusBar } from 'expo-status-bar';
import { UserProvider } from './src/hooks/useUser';
import { NotificationProvider } from './src/hooks/useNotification';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" animated={true} />
      <NavigationContainer>
        <NotificationProvider>
        <UserProvider>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: { backgroundColor: Color.primary },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
            }}>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Widget"
              component={WidgetScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupScreen}
              options={{ title: 'Create an account' }}
            />
            <Stack.Screen
              name="Signin"
              component={SigninScreen}
              options={{ title: 'Sign in to your account' }}
            />
            <Stack.Screen
              name="SendPayment"
              component={SendPaymentScreen}
              options={{ title: 'Send Payment' }}
            />
            <Stack.Screen
              name="Notifications"
              component={NotificationScreen}
              options={{ title: 'View all notifications' }}
            />
          </Stack.Navigator>
        </UserProvider>
        </NotificationProvider>
      </NavigationContainer>
    </>
  );
}
