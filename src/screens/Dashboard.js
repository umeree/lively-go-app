import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DashHeader from '../components/Header/DashHeader.js';
import {theme} from '../Theme/Theme';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

export default function Dashboard({navigation}) {
  return (
    <>
      <DashHeader />
      <SafeAreaView>
        <View
          style={styles.mainModules}
          onPress={() => navigation.navigate('FindFriendScreen')}>
          <TouchableOpacity
            style={styles.screens}
            onPress={() => navigation.navigate('AllStreamsScreen')}>
            <Text style={styles.text}>Recents Live Streams</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('FollowersScreen')}
            style={styles.screens}>
            <Text style={styles.text}>Followers List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('FollowingScreen')}
            style={styles.screens}>
            <Text style={styles.text}>Following List</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.screens}>
            <Text style={styles.text}>Stats</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity style={styles.screens}>
            <Text style={styles.text}>Contacts</Text>
          </TouchableOpacity> */}
        </View>
      </SafeAreaView>
      <Pressable
        style={{
          position: 'absolute',
          padding: 15,
          bottom: 5,
          right: 10,
          backgroundColor: theme.colors.secondary,
          borderRadius: 50,
        }}
        onPress={() => navigation.navigate('InitialPublishStreamScreen')}>
        <MatIcon name="live-tv" size={32} color="white" />
      </Pressable>
    </>
  );
}
const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '33%',
  },
  text: {
    color: 'white',
    paddingLeft: 15,
    fontSize: 19,
  },
  mainModules: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25%',
  },
  screens: {
    backgroundColor: theme.colors.primary,
    width: 300,
    marginBottom: 20,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnLive: {
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 300,
    alignContent: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
});
