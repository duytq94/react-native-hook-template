import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import styles from './DetailProfile.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const DetailProfileScreen = () => {
  const navigation = useNavigation();

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
          onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name={'arrow-left'}
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={styles.titleToolbar}>Detail profile</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {renderToolbar()}
      <Text style={styles.textContent}>
        Example this is the detail profile screen
      </Text>
    </View>
  );
};
export default DetailProfileScreen;
