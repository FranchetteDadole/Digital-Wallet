import { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import { Color } from '../../constants';
import { Feather } from '@expo/vector-icons';
import useFakeRequest from '../../hooks/useFakeRequest';

const AccountBalanceWidget = () => {
  const navigation = useNavigation();

  const [isHidden, setIsHidden] = useState(true);
  const { requestLoading, onFakeRequest } = useFakeRequest();

  return (
    <View stlye={{ overflow: 'hidden' }}>
      {!isHidden && (
        <>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 4,
              left: 4,
              flexDirection: 'row',
              alignItems: 'center',
              zIndex: 1,
              padding: 8,
            }}
            onPress={() => setIsHidden(true)}>
            <Feather
              name="lock"
              size={18}
              color="white"
              style={{ marginRight: 6 }}
            />
            <Text style={{ color: 'white' }}>Lock</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 4,
              right: 4,
              flexDirection: 'row',
              alignItems: 'center',
              zIndex: 1,
              padding: 8,
            }}
            onPress={() => navigation.dispatch(StackActions.replace('Signin'))}>
            <Text style={{ color: 'white' }}>Open</Text>
            <Feather
              name="log-in"
              size={18}
              color="white"
              style={{ marginLeft: 6 }}
            />
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity
        activeOpacity={0.75}
        style={{
          position: 'relative',
          borderRadius: 24,
          backgroundColor: Color.primary,
          paddingHorizontal: 16,
          paddingVertical: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={async () => {
          setIsHidden(false);
          isHidden && (await onFakeRequest(500));
        }}>
        <View
          style={{
            position: 'absolute',
            width: '60%',
            opacity: isHidden ? 1 : 0,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Feather name="unlock" size={32} color="white" />
            <Text
              style={{
                color: 'white',
                marginLeft: 16,
                fontSize: 16,
              }}>
              {`Tap to see your available balance.`}
            </Text>
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            opacity: isHidden ? 0 : 1,
          }}>
          <Image
            style={{ width: 28, height: 28, resizeMode: 'contain' }}
            source={require('../../assets/images/logoo.png')}
          />
          <View style={{ marginVertical: 8 }}>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                textAlign: 'center',
              }}>
              Available Balance
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 42,
                textAlign: 'center',
              }}>
              {!requestLoading ? `₱69,420` : 'Processing...'}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                textAlign: 'center',
              }}>{`+63 961 7196 607`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AccountBalanceWidget;
