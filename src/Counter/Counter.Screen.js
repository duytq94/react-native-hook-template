import React, {useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Counter.Style';
import {useNavigation} from '@react-navigation/native';
import AppBar from '../Components/AppBar';

const CounterScreen = () => {
  const navigation = useNavigation();
  const counter = useRef(0);
  const [counterState, setCounterState] = useState(0);

  const updateState = () => {
    counter.current++;
    setCounterState(counterState + 1);
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
      <AppBar title={'Counter'} onBtnLeftPress={navigation.openDrawer} />
      {renderButton()}
      {renderData()}
    </View>
  );
};
export default CounterScreen;
