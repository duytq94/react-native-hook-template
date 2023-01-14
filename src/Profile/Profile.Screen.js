import React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Profile.Style';
import {useDispatch, useSelector} from 'react-redux';
import NoDataView from '../Components/NoDataView';
import {getProfileRequest} from './Profile.Action';
import {useNavigation} from '@react-navigation/native';
import AppBar from '../Components/AppBar';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const profile = useSelector(state => state.getProfile);
  const dispatch = useDispatch();
  const getProfile = () => dispatch(getProfileRequest('duytq94'));

  const goDetailScreen = () => {
    navigation.navigate('DetailProfileScreen', {});
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
      <AppBar title={'Profile'} onBtnLeftPress={navigation.openDrawer} />
      {renderButton()}
      {renderDataView()}
      {renderLoading()}
    </View>
  );
};
export default ProfileScreen;
