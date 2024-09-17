import { useState, useContext, createContext, useEffect, useRef } from 'react';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import currencyFormat from '../utils/currencyFormat';
const notificationContext = createContext();

export const useNotification = () => {
  return useContext(notificationContext);
};

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export function NotificationProvider({ children }) {
  const notification = useProvideNotification();
  return (
    <notificationContext.Provider value={notification}>
      {children}
    </notificationContext.Provider>
  );
}

const useProvideNotification = () => {
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  useEffect(() => {
    registerForPushNotificationsAsync();

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return { notification, schedulePushNotification };
};

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      // alert('Failed to get push token for push notification!');
      return;
    }
  } else {
    // alert('Must use physical device for Push Notifications');
  }

  return token;
}

async function schedulePushNotification(data) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Your payment has been sent!',
      body: `Payment to ${data.to} from ${
        data.from
      } amounting of ${currencyFormat(parseInt(data.amount))} was sent!`,
    },
    trigger: { seconds: 1 },
  });
}
