import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Follower.Style';
import {getFollowerRequest} from './Follower.Action';
import NoDataView from '../Components/NoDataView';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

export default function FollowerScreen() {
  const navigation = useNavigation();
  const listFollower = useSelector(state => state.getFollower);
  const dispatch = useDispatch();
  const getFollower = () => dispatch(getFollowerRequest('duytq94'));

  return (
    <View style={styles.mainContainer}>
      <View style={styles.toolbar}>
        <StatusBar
          hidden={false}
          backgroundColor={colors.primary}
          barStyle={barStyle.lightContent}
        />
        <TouchableOpacity
          style={styles.viewWrapIcLeft}
          onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons
            name={'menu'}
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={styles.titleToolbar}>Follower</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>

      <TouchableOpacity style={styles.btnGetData} onPress={getFollower}>
        <Text style={styles.textGetData}>Get follower</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnGetData}
        onPress={() => navigation.navigate('DetailFollowerScreen', {})}>
        <Text style={styles.textGetData}>Go detail</Text>
      </TouchableOpacity>

      {listFollower.data ? (
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
          ListHeaderComponent={() => <View style={{height: 10}} />}
          ListFooterComponent={() => <View style={{height: 10}} />}
        />
      ) : listFollower.err ? (
        <NoDataView onRetryPress={getFollower} />
      ) : null}

      {listFollower.fetching ? (
        <View style={styles.viewLoading}>
          <ActivityIndicator />
        </View>
      ) : null}
    </View>
  );
}
