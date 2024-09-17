import {
  View,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  Alert,
  ToastAndroid,
} from 'react-native';
import { useState } from 'react';
import { Text, Searchbar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { Color, paddingHorizontalContainer } from '../constants';
import useFakeRefresh from '../hooks/useFakeRefresh';
import { useUser } from '../hooks/useUser';
import currencyFormat from '../utils/currencyFormat';
import * as Clipboard from 'expo-clipboard';

const alert = (notification) => {
  Alert.alert(
    notification.title,
    `To: ${notification.receiverMobileNo}\nAmount: ${currencyFormat(
      notification.amount
    )}\nDate: ${notification.date}\nReference No.: ${notification.referenceId}`,
    [
      {
        text: 'Copy Reference ID',
        onPress: async () => {
          await Clipboard.setStringAsync(notification.referenceId.toString());

          ToastAndroid.show('Copied to clipboard.', ToastAndroid.SHORT);
        },
      },
      { text: 'OK' },
    ],
    { cancelable: true }
  );
};

const NotificationScreen = () => {
  const { refreshing, onRefresh } = useFakeRefresh();
  const { notifications } = useUser();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{
          borderRadius: 100,
          marginHorizontal: paddingHorizontalContainer,
          marginTop: paddingHorizontalContainer,
        }}
      />
      <ScrollView
        style={{
          paddingVertical: 8,
          paddingHorizontal: paddingHorizontalContainer,
          flex: 1,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {notifications.map((notification, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 8,
              }}
              onPress={() => alert(notification)}>
              <View
                style={{
                  width: 42,
                  height: 42,
                  backgroundColor: Color.primary,
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FontAwesome name={notification.icon} size={24} color="white" />
              </View>
              <View style={{ flex: 1, marginLeft: 8 }}>
                <Text style={{ fontWeight: 'bold' }}>{notification.title}</Text>
                <Text style={{ fontSize: 12 }}>{notification.date}</Text>
              </View>
              {notification.isNew && (
                <View
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    backgroundColor: Color.primary,
                    borderRadius: 16,
                  }}>
                  <Text style={{ color: 'white', fontSize: 12 }}>New</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
};

export default NotificationScreen;
