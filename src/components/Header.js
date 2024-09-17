import { View, TouchableOpacity, Image } from 'react-native';
import { Button, Badge } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { useUser } from '../hooks/useUser';
import { Color } from '../constants';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const { signout, userLoading, notifications } = useUser();
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingTop: 48,
          position: 'absolute',
          zIndex: 5,
          width: '100%',
        }}>
        <TouchableOpacity>
          <Image
            style={{ width: 32, height: 32, resizeMode: 'contain' }}
            source={require('../assets/images/logoo.png')}
          />
        </TouchableOpacity>
        <Button
          mode="contained"
          onPress={async () => await signout()}
          style={{
            borderRadius: 100,
            backgroundColor: Color.primary,
            marginBottom: 12,
          }}
          labelStyle={{
            color: !userLoading ? 'white' : 'rgba(255,255,255, 0.75)',
          }}
          loading={userLoading}
          disabled={userLoading}>
          {!userLoading ? 'Sign out' : 'Loading...'}
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Badge
            size={16}
            visible={notifications.filter((notif) => notif.isNew).length}
            style={{
              backgroundColor: 'green',
              position: 'absolute',
              top: -4,
              right: -4,
              zIndex: 1,
            }}>
            {notifications.filter((notif) => notif.isNew).length}
          </Badge>
          <FontAwesome name="bell" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
};
export default Header;
