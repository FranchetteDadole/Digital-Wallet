import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import Header from '../components/Header';
import { Color, homeScreenIcons } from '../constants';
import BottomNavigation from '../components/@home/BottomNavigation';
import { useUser } from '../hooks/useUser';
import currencyFormat from '../utils/currencyFormat';

const HomeScreen = ({ navigation }) => {
  const { user } = useUser();
  if (user) {
    return (
      <>
        <Header />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Color.primary,
            paddingTop: 100,
            paddingBottom: 32,
          }}>
          <View style={{ marginBottom: 28 }}>
            <Text
              variant="displaySmall"
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                marginBottom: 8,
              }}>
              {currencyFormat(user.accountBalance)}
            </Text>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
              }}>
              {user.mobileNo}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '75%',
            }}>
            {homeScreenIcons.map((icon, index) => (
              <View
                style={{
                  flexDirection: 'column',
                }}
                key={index}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(icon.navigate);
                  }}
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: 'white',
                    padding: 10,
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FontAwesome
                    name={icon.icon}
                    size={24}
                    color={Color.primary}
                  />
                </TouchableOpacity>
                <Text
                  style={{ textAlign: 'center', marginTop: 8, color: 'white' }}>
                  {icon.text}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <BottomNavigation />
      </>
    );
  }
};

export default HomeScreen;
