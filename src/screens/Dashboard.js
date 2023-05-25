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
      <DashHeader navigation={navigation} />
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: theme.colors.secondary,
            width: 200,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
          }}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 500}}>
            Dashboard
          </Text>
        </View>
      </View>
      <SafeAreaView style={{marginTop: -40}}>
        <View
          style={styles.mainModules}
          onPress={() => navigation.navigate('FindFriendScreen')}>
          <TouchableOpacity
            style={styles.screens}
            onPress={() => navigation.navigate('AllStreamsScreen')}>
            <Text style={styles.text}>All Live Streams</Text>
          </TouchableOpacity>
          <View>
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
          </View>
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
          backgroundColor: theme.colors.intermediate,
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25%',
  },
  screens: {
    backgroundColor: theme.colors.secondary,
    height: 180,
    width: 180,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
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
