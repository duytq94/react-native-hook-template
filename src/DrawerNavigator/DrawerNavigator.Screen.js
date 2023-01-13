import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../Profile/Profile.Screen';
import FollowerScreen from '../Follower/Follower.Screen';
import React from 'react';
import CounterScreen from '../Counter/Counter.Screen';
import styles from './DrawerNavigator.Style';

const Drawer = createDrawerNavigator();

const DrawerNavigatorScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'rgba(254,156,143,0.3)',
        drawerLabelStyle: styles.textItemMenu,
      }}
      initialRouteName={'ProfileScreen'}>
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="FollowerScreen" component={FollowerScreen} />
      <Drawer.Screen name="CounterScreen" component={CounterScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigatorScreen;
