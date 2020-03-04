import React, {useEffect, useState} from 'react';
import styles from './RootContainer.Style';
import {Keyboard, Platform, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailProfileScreen from '../DetailProfile/DetailProfile.Screen';
import DetailFollowerScreen from '../DetailFollower/DetailFollower.Screen';
import DrawerNavigatorScreen from '../DrawerNavigator/DrawerNavigator.Screen';
import Toast from 'react-native-simple-toast';
import {useDispatch, useSelector} from 'react-redux';
import {clearNetworkFail} from '../actions';

const Stack = createStackNavigator();

const RootContainerScreen = () => {
  const sendNetworkFail = useSelector(state => state.sendNetworkFail);
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const dispatch = useDispatch();
  const clearNetworkStatus = () => dispatch(clearNetworkFail());

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      e => {
        setIsKeyboardShow(true);
        setKeyboardHeight(e.endCoordinates.height);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardShow(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  if (sendNetworkFail.err) {
    switch (sendNetworkFail.err) {
      case 'NETWORK_ERROR':
        Toast.show('No network connection, please try again');
        break;
      case 'TIMEOUT_ERROR':
        Toast.show('Timeout, please try again');
        break;
      case 'CONNECTION_ERROR':
        Toast.show('DNS server not found, please try again');
        break;
      default:
        Toast.show(sendNetworkFail.err);
        break;
    }
    clearNetworkStatus();
  }

  return (
    <View style={styles.mainContainer}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Drawer" headerMode={'none'}>
          <Stack.Screen name="Drawer" component={DrawerNavigatorScreen} />
          <Stack.Screen
            name="DetailProfileScreen"
            component={DetailProfileScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="DetailFollowerScreen"
            component={DetailFollowerScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
        </Stack.Navigator>
      </NavigationContainer>

      {/*Keyboard padding*/}
      {isKeyboardShow && Platform.OS === 'ios' ? (
        <View style={{height: keyboardHeight}} />
      ) : null}
    </View>
  );
};
export default RootContainerScreen;
