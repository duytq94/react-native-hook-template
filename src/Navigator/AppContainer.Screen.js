import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {clearNetworkFail} from '../actions';
import AppStack from './StackNavigator.Component';
import ApplicationStyle from '../Themes/Application.Style';
import colors from '../Themes/Colors';

const AppContainerScreen = () => {
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
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </KeyboardAvoidingView>
      <Toast />
    </View>
  );
};
export default AppContainerScreen;

const styles = StyleSheet.create({
  ...ApplicationStyle,
  viewNetworkErr: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnRetry: {
    width: 150,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRetry: {
    color: colors.black,
    fontWeight: 'bold',
  },
});
