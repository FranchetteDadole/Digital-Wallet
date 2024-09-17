import { View, Image } from 'react-native';
import AccountBalanceWidget from '../components/@widget/AccountBalanceWidget';

const WidgetScreen = () => {
  return (
    <View style={{ height: '100%', width: '100%' }}>
      <View style={{ top: "10%", paddingHorizontal:"6%" }}>
        <AccountBalanceWidget />
      </View>
      <Image
        source={require('../assets/images/logoo.png')}
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          zIndex: -1,
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export default WidgetScreen;
