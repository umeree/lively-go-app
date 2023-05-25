import React, {createContext, useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {Image} from 'react-native';
import {useUserDataHandler} from '../../../context/UserInfoContext';
import {theme} from '../../Theme/Theme';

function DashHeader({navigation}) {
  const {userData} = useUserDataHandler();
  return (
    <View style={styles.containerHeader}>
      <Text style={{fontSize: 28, color: 'white'}}>Lively Go</Text>
      <Pressable style={styles.userInfo}>
        <Image
          style={styles.infoImage}
          source={require('../../assets/prof.jpeg')}
        />
        <Text style={styles.infoText}>{userData?.first_name}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '12.5%',
    backgroundColor: theme.colors.primary,
    paddingTop: 10,
    paddingHorizontal: '5%',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  infoImage: {
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  infoText: {
    marginRight: 10,
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
});

export default DashHeader;
