import React from 'react';
import {Text, View} from 'react-native';
import styles from './DetailProfile.Style';
import {useNavigation} from '@react-navigation/native';
import AppBar from '../Components/AppBar';

const DetailProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <AppBar
        title={'Detail profile'}
        iconLeft={'arrow-left'}
        onBtnLeftPress={navigation.goBack}
      />

      <Text style={styles.textContent}>
        Example this is the detail profile screen
      </Text>
    </View>
  );
};
export default DetailProfileScreen;
