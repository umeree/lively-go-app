import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {clearLocalStorageSession} from '../../../client/requests';
import Toast from 'react-native-toast-message';
import {theme} from '../../Theme/Theme';
import {useUserDataHandler} from '../../../context/UserInfoContext';
import {Pressable} from 'react-native';

const ProfileScreen = ({navigation}) => {
  const {userData, followers, followings, streams, ClearStates} =
    useUserDataHandler();

  const showSuccessToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Authentication',
      text2: 'Sucessfully logged out!',
    });
  };

  function onLogout() {
    clearLocalStorageSession().then(res => {
      ClearStates();
      showSuccessToast();
      navigation.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      });
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.profPart}>
        <Text
          style={{
            fontWeight: '900',
            fontSize: 56,
            zIndex: 1,
            textAlign: 'center',
          }}>
          {userData?.first_name} {userData?.last_name}
        </Text>
        <Text
          style={{
            fontWeight: '900',
            fontSize: 300,
            position: 'absolute',
            color: 'white',
            opacity: 0.2,
            zIndex: 0,
          }}>
          {userData?.first_name[0]}
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}>
        <Pressable
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 32, fontWeight: '900', color: 'black'}}>
            {followings?.length}
          </Text>
          <Text style={{color: 'black', fontSize: 18}}>Followings</Text>
        </Pressable>
        <View style={{width: 2, height: 50, backgroundColor: 'gray'}}></View>
        <Pressable
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 32, fontWeight: '900', color: 'black'}}>
            {followers?.length}
          </Text>
          <Text style={{color: 'black', fontSize: 18}}>Followers</Text>
        </Pressable>
        <View style={{width: 2, height: 50, backgroundColor: 'gray'}}></View>
        <Pressable
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 32, fontWeight: '900', color: 'black'}}>
            {streams?.length}
          </Text>
          <Text style={{color: 'black', fontSize: 18}}>Streams</Text>
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          padding: 10,
          marginVertical: 5,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.text}>Available hearts:</Text>
        <Text style={{fontSize: 18}}>{userData?.hearts}</Text>
      </View>
      <Pressable
        style={{
          backgroundColor: 'white',
          width: '100%',
          padding: 10,
          marginVertical: 5,
        }}>
        <Text style={styles.text}>Broadcast</Text>
      </Pressable>
      <Pressable
        style={{
          backgroundColor: 'white',
          width: '100%',
          padding: 10,
          marginVertical: 5,
        }}
        onPress={() => navigation.navigate('PaymentScreen')}>
        <Text style={styles.text}>Buy Super Hearts ❤️</Text>
      </Pressable>
      {/* <Pressable
        style={{
          backgroundColor: 'white',
          width: '100%',
          padding: 10,
          marginVertical: 5,
        }}>
        <Text style={styles.text}>Settings</Text>
      </Pressable> */}
      <Pressable
        style={{
          backgroundColor: 'white',
          width: '100%',
          padding: 10,
          marginVertical: 5,
        }}
        onPress={onLogout}>
        <Text style={{fontSize: 20, marginLeft: 10, color: theme.colors.error}}>
          Logout
        </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  profPart: {
    position: 'relative',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
  },
  counterSection: {
    flexDirection: 'column',
    backgroundColor: '#FAF9F6',
  },
  settingStyle: {
    justifyContent: 'center',
    height: '8%',
    backgroundColor: '#FAF9F6',
  },
  space: {
    height: '5%',
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    color: theme.colors.text,
  },
  upText: {
    fontSize: 20,
  },
  logoutbtn: {
    backgroundColor: '#FAF9F6',
    height: 50,
    justifyContent: 'center',
  },
});
export default ProfileScreen;
