import { Text } from 'react-native-paper';
import {
  TouchableOpacity,
  View,
  ScrollView,
  RefreshControl,
  Alert,
  ToastAndroid,
} from 'react-native';
import useFakeRefresh from '../../hooks/useFakeRefresh';
import { FontAwesome } from '@expo/vector-icons';
import { transactions, Color } from '../../constants';
import * as Clipboard from 'expo-clipboard';

const alert = (transaction) => {
  Alert.alert(
    transaction.type,
    `To: ${transaction.to}\nAmount: ${transaction.amount}\nReference No.: ${transaction.referenceId}`,
    [
      {
        text: 'Copy Reference ID',
        onPress: async () => {
          await Clipboard.setStringAsync(transaction.referenceId.toString());

          ToastAndroid.show('Copied to clipboard.', ToastAndroid.SHORT);
        },
      },
      { text: 'OK' },
    ],{cancelable:true}
  );
};

const HomeRoute = () => {
  const { refreshing, onRefresh } = useFakeRefresh();
  return (
    <>
      <ScrollView
        style={{ height: '100%' }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 16, marginBottom: 16, color: 'gray' }}>
            Today
          </Text>
          {transactions.map((transaction, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 8,
                  paddingVertical: 8,
                }}
                onPress={() => alert(transaction)}>
                <View
                  style={{
                    padding: 10,
                    backgroundColor: Color.primary,
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 38,
                    height: 38,
                  }}>
                  <FontAwesome
                    name={
                      (transaction.type === 'Transfer' && 'send') ||
                      (transaction.type === 'Pay Bills' && 'calendar') ||
                      (transaction.type === 'Buy' && 'shopping-cart')
                    }
                    size={18}
                    color="white"
                  />
                </View>

                <View
                  style={{
                    marginLeft: 8,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <View>
                    <Text style={{ fontWeight: '700' }}>
                      {transaction.type}
                    </Text>
                    <Text style={{ fontSize: 12 }}>To: {transaction.to}</Text>
                  </View>
                  <View>
                    <Text style={{ fontWeight: '700' }}>
                      {transaction.amount}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default HomeRoute;
