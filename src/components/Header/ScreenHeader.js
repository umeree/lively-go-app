import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {theme} from '../../Theme/Theme';
export default function ScreenHeader({navigation, title = 'Screen Name'}) {
  return (
    <View
      style={{
        alignItems: 'center',
        height: '10%',
        borderBottomColor: 'gray',
        borderBottomWidth: 1.5,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: '5%',
          marginTop: '6%',
        }}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Image
            style={{width: 28, height: 28}}
            source={require('../../assets/arrow_back.png')}
          />
        </TouchableOpacity>
        <Text style={{color: theme.colors.text, fontSize: 22}}>{title}</Text>
        <Text></Text>
      </View>
    </View>
  );
}
