import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import styles from '../Follower/Follower.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

const AppBar = ({title, iconLeft, onBtnLeftPress}) => {
  return (
    <View style={styles.toolbar}>
      <StatusBar
        hidden={false}
        backgroundColor={colors.primary}
        barStyle={barStyle.lightContent}
      />
      <TouchableOpacity style={styles.viewWrapIcLeft} onPress={onBtnLeftPress}>
        <MaterialCommunityIcons
          name={iconLeft ?? 'menu'}
          size={30}
          color={colors.white}
        />
      </TouchableOpacity>
      <View style={styles.viewWrapTitleToolbar}>
        <Text style={styles.titleToolbar}>{title}</Text>
      </View>
      <View style={styles.viewWrapIcRight} />
    </View>
  );
};

export default AppBar;
