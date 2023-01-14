import React from 'react';
import {Text, View} from 'react-native';
import styles from './DetailFollower.Style';
import {useNavigation} from '@react-navigation/native';
import AppBar from '../Components/AppBar';

const DetailFollowerScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <AppBar
        title={'Detail follower'}
        iconLeft={'arrow-left'}
        onBtnLeftPress={navigation.goBack}
      />
      <Text style={styles.textContent}>
        Example this is the detail follower screen
      </Text>
    </View>
  );
};
export default DetailFollowerScreen;
