import React, {useRef, useState} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import styles from './Counter.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const CounterScreen = () => {
  const navigation = useNavigation();
  const counter = useRef(0);
  const [counterState, setCounterState] = useState(0);

  const updateState = () => {
    counter.current++;
    setCounterState(counterState + 1);
  };

  const renderToolbar = () => {
    return (
      <View style={styles.toolbar}>
        <StatusBar
          hidden={false}
          backgroundColor={colors.primary}
          barStyle={barStyle.lightContent}
        />
        <TouchableOpacity
          style={styles.viewWrapIcLeft}
          onPress={navigation.openDrawer}>
          <MaterialCommunityIcons
            name={'menu'}
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={styles.titleToolbar}>Counter</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  const renderButton = () => {
    return (
      <TouchableOpacity style={styles.btnIncrease} onPress={updateState}>
        <Text style={styles.textBtnIncrease}>Increase</Text>
      </TouchableOpacity>
    );
  };

  const renderData = () => {
    return (
      <View style={{margin: 20}}>
        <Text style={styles.text}>State count: {counterState}</Text>
        <Text style={styles.text}>Instance count: {counter.current}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {renderToolbar()}
      {renderButton()}
      {renderData()}
    </View>
  );
};
export default CounterScreen;
