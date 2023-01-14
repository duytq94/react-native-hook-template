import DrawerNavigatorComponent from './DrawerNavigator.Component';
import DetailProfileScreen from '../DetailProfile/DetailProfile.Screen';
import DetailFollowerScreen from '../DetailFollower/DetailFollower.Screen';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Drawer'}>
      <Stack.Screen name="Drawer" component={DrawerNavigatorComponent} />
      <Stack.Screen
        name="DetailProfileScreen"
        component={DetailProfileScreen}
      />
      <Stack.Screen
        name="DetailFollowerScreen"
        component={DetailFollowerScreen}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
