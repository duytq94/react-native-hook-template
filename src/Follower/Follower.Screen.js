import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Follower.Style';
import {getFollowerRequest} from './Follower.Action';
import NoDataView from '../Components/NoDataView';
import {useNavigation} from '@react-navigation/native';
import AppBar from '../Components/AppBar';

const FollowerScreen = () => {
  const navigation = useNavigation();
  const listFollower = useSelector(state => state.getFollower);
  const dispatch = useDispatch();
  const getFollower = () => dispatch(getFollowerRequest('duytq94'));

  const renderLoading = () => {
    if (listFollower.fetching) {
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
        <TouchableOpacity style={styles.btnGetData} onPress={getFollower}>
          <Text style={styles.textGetData}>Get follower</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnGetData}
          onPress={() => navigation.navigate('DetailFollowerScreen', {})}>
          <Text style={styles.textGetData}>Go detail</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderDataView = () => {
    if (listFollower.data) {
      return (
        <FlatList
          style={{flex: 1, paddingLeft: 10, paddingRight: 10}}
          data={listFollower.data}
          renderItem={({item}) => (
            <View style={styles.viewWrapItem}>
              <Image style={styles.avatar} source={{uri: item.avatar_url}} />
              <Text style={styles.textName}>{item.login}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderHeader}
        />
      );
    } else if (listFollower.err) {
      return <NoDataView onRetryPress={getFollower} />;
    } else {
      return null;
    }
  };

  const renderHeader = () => {
    return <View style={{height: 10}} />;
  };

  return (
    <View style={styles.mainContainer}>
      <AppBar title={'Follower'} onBtnLeftPress={navigation.openDrawer} />
      {renderButton()}
      {renderDataView()}
      {renderLoading()}
    </View>
  );
};
export default FollowerScreen;
