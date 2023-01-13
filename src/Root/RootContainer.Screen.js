import React from 'react';
import styles from './RootContainer.Style';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailProfileScreen from '../DetailProfile/DetailProfile.Screen';
import DetailFollowerScreen from '../DetailFollower/DetailFollower.Screen';
import DrawerNavigatorScreen from '../DrawerNavigator/DrawerNavigator.Screen';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {clearNetworkFail} from '../actions';

const Stack = createNativeStackNavigator();

const RootContainerScreen = () => {
  const sendNetworkFail = useSelector(state => state.sendNetworkFail);
  const dispatch = useDispatch();
  const clearNetworkStatus = () => dispatch(clearNetworkFail());

  if (sendNetworkFail.err) {
    switch (sendNetworkFail.err) {
      case 'NETWORK_ERROR':
        Toast.show({
          type: 'info',
          text1: 'No network connection, please try again',
        });
        break;
      case 'TIMEOUT_ERROR':
        Toast.show({type: 'info', text1: 'Timeout, please try again'});
        break;
      case 'CONNECTION_ERROR':
        Toast.show({
          type: 'info',
          text1: 'DNS server not found, please try again',
        });
        break;
      default:
        Toast.show({
          type: 'info',
          text1: sendNetworkFail.err,
        });
        break;
    }
    clearNetworkStatus();
  }

  return (
    <View style={styles.mainContainer}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'Drawer'}>
          <Stack.Screen name="Drawer" component={DrawerNavigatorScreen} />
          <Stack.Screen
            name="DetailProfileScreen"
            component={DetailProfileScreen}
          />
          <Stack.Screen
            name="DetailFollowerScreen"
            component={DetailFollowerScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </View>
  );
};
export default RootContainerScreen;
