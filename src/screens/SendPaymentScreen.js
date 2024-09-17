import { useState } from 'react';
import { View, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Color, paddingHorizontalContainer } from '../constants';
import { useUser } from '../hooks/useUser';
import currencyFormat from '../utils/currencyFormat';

const SendPaymentScreen = ({ navigation }) => {
  const [sendPaymentData, setSendPaymentData] = useState({
    mobileNo: '',
    amount: '',
  });
  const { userLoading, sendPayment, user } = useUser();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: paddingHorizontalContainer,
      }}>
      <TextInput
        mode="outlined"
        outlineColor={Color.gray}
        theme={{ colors: { primary: Color.primary } }}
        label="Mobile number"
        keyboardType="phone-pad"
        autoComplete="tel-device"
        onChangeText={(text) =>
          setSendPaymentData({ ...sendPaymentData, mobileNo: text })
        }
        value={sendPaymentData.mobileNo}
        style={{
          width: '100%',
          marginBottom: 12,
        }}
        left={<TextInput.Affix text="+63" color={Color.gray} />}
      />
      <TextInput
        mode="outlined"
        outlineColor={Color.gray}
        theme={{ colors: { primary: Color.primary } }}
        label="Amount"
        keyboardType="numeric"
        onChangeText={(text) =>
          setSendPaymentData({ ...sendPaymentData, amount: text })
        }
        value={sendPaymentData.amount}
        style={{
          width: '100%',
          marginBottom: 12,
        }}
        left={<TextInput.Affix text="₱" color={Color.gray} />}
      />

      <Button
        mode="contained"
        contentStyle={{ height: 48 }}
        style={{
          width: '100%',
          borderRadius: 100,
          backgroundColor: Color.primary,
          marginBottom: 12,
        }}
        labelStyle={{
          color: !userLoading ? 'white' : 'rgba(255,255,255, 0.75)',
        }}
        loading={userLoading}
        onPress={async () => {
          if (!sendPaymentData.mobileNo || !sendPaymentData.amount) {
            Alert.alert(
              'Invalid.',
              'Please enter your mobile number or amount.',
              [{ text: 'OK' }]
            );
            return;
          }

          if (
            !(
              sendPaymentData.mobileNo.length >= 10 &&
              sendPaymentData.mobileNo.length <= 11
            )
          ) {
            Alert.alert(
              'Invalid mobile number.',
              'Please enter a valid phone number.',
              [{ text: 'OK' }]
            );
            return;
          }
          let tempMobileNo = sendPaymentData.mobileNo;
          if (sendPaymentData.mobileNo.length === 10) {
            setSendPaymentData({
              ...sendPaymentData,
              amount:
                sendPaymentData.amount.split('.').length === 1
                  ? sendPaymentData.amount + '.00'
                  : sendPaymentData.amount.split('.')[1].length === 1
                  ? sendPaymentData.amount + '0'
                  : sendPaymentData.amount,
            });
            tempMobileNo = '+63' + sendPaymentData.mobileNo;
            tempAmount =
              sendPaymentData.amount.split('.').length === 1
                ? sendPaymentData.amount + '.00'
                : sendPaymentData.amount.split('.')[1].length === 1
                ? sendPaymentData.amount + '0'
                : sendPaymentData.amount;
          }

          await sendPayment(
            parseInt(sendPaymentData.amount),
            sendPaymentData.mobileNo
          )
            .then(() => {
              setSendPaymentData({ mobileNo: '', amount: '' });
              Alert.alert(
                'Payment sent!',
                `Payment to ${tempMobileNo} from ${
                  user.mobileNo
                } amounting of ${currencyFormat(
                  parseInt(sendPaymentData.amount)
                )} was sent!`,
                [
                  {
                    text: 'OK',
                    onPress: () => navigation.navigate('Home'),
                  },
                ]
              );
            })
            .catch((error) => {
              Alert.alert('Oops!', error.message, [
                {
                  text: 'Try Again',
                },
              ]);
            });
        }}>
        {!userLoading ? 'Send' : 'Sending...'}
      </Button>
    </View>
  );
};

export default SendPaymentScreen;
