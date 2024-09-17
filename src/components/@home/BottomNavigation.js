import { useState } from 'react';
import {
  BottomNavigation as BottomNavigationRNP,
  Text,
} from 'react-native-paper';
import { View } from 'react-native';
import HomeRoute from './HomeRoute';
import { Color } from '../../constants';
import { Ionicons } from '@expo/vector-icons';

const BottomNavigation = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: () => <Ionicons name="home" size={24} color="white" />,
      unfocusedIcon: () => (
        <Ionicons name="home-outline" size={24} color="white" />
      ),
    },
    {
      key: 'inbox',
      title: 'Inbox',
      focusedIcon: () => <Ionicons name="mail" size={24} color="white" />,
      unfocusedIcon: () => (
        <Ionicons name="mail-outline" size={24} color="white" />
      ),
    },
    {
      key: 'profile',
      title: 'Profile',
      focusedIcon: () => (
        <Ionicons name="person-circle" size={24} color="white" />
      ),
      unfocusedIcon: () => (
        <Ionicons name="person-circle-outline" size={24} color="white" />
      ),
    },
    {
      key: 'settings',
      title: 'Settings',
      focusedIcon: () => <Ionicons name="settings" size={24} color="white" />,
      unfocusedIcon: () => (
        <Ionicons name="settings-outline" size={24} color="white" />
      ),
    },
  ]);

  const renderScene = BottomNavigationRNP.SceneMap({
    home: () => <HomeRoute />,
    inbox: () => (
      <Text style={{ textAlign: 'center', flex: 1, height: '100%' }}>
        No message yet.
      </Text>
    ),
    profile: () => (
      <Text style={{ textAlign: 'center', flex: 1, height: '100%' }}>
        Not available yet.
      </Text>
    ),
    settings: () => (
      <Text style={{ textAlign: 'center', flex: 1, height: '100%' }}>
        Settings
      </Text>
    ),
  });

  return (
    <>
      <View style={{ position: 'absolute', bottom: 0, left: '50%' }}>
        <Text>lol</Text>
      </View>
      <BottomNavigationRNP
        shifting={true}
        activeColor="#0c88da"
        inactiveColor="#0c88da"
        sceneAnimationType="shifting"
        barStyle={{ backgroundColor: Color.primary }}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
};

export default BottomNavigation;
