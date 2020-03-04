import React from 'react';
import {
  ActivityIndicator,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Profile.Style';
import colors from '../Themes/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {barStyle} from '../const';
import {useDispatch, useSelector} from 'react-redux';
import NoDataView from '../Components/NoDataView';
import {getProfileRequest} from './Profile.Action';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const profile = useSelector(state => state.getProfile);
  const dispatch = useDispatch();
  const getProfile = () => dispatch(getProfileRequest('duytq94'));

  const goDetailScreen = () => {
    navigation.navigate('DetailProfileScreen', {});
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
          <Text style={styles.titleToolbar}>Profile</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  const renderDataView = () => {
    if (profile.data) {
      return (
        <View style={styles.body}>
          <Image
            style={styles.avatar}
            source={{uri: profile.data.avatar_url}}
          />
          <Text style={styles.textData}>{profile.data.login}</Text>
          <Text style={styles.textData}>{profile.data.name}</Text>
          <Text style={styles.textData}>{profile.data.location}</Text>
        </View>
      );
    } else if (profile.err) {
      return <NoDataView onRetryPress={getProfile} />;
    } else {
      return null;
    }
  };

  const renderLoading = () => {
    if (profile.fetching) {
      return (
        <View style={styles.viewLoading}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return null;
    }
  };

  const renderButton = () => {
    return (
      <View>
        <TouchableOpacity style={styles.btnGetData} onPress={getProfile}>
          <Text style={styles.textGetData}>Get profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnGetData} onPress={goDetailScreen}>
          <Text style={styles.textGetData}>Go detail</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {renderToolbar()}
      {renderButton()}
      {renderDataView()}
      {renderLoading()}
    </View>
  );
};
export default ProfileScreen;
