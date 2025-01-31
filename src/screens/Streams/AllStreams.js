import React from 'react';
import ScreenHeader from '../../components/Header/ScreenHeader';
import StreamContainer from './Components/StreamContainer';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';

export default function AllStreams({navigation}) {
  return (
    <>
      <ScreenHeader navigation={navigation} title="All Streams" />
      <ScrollView
        style={{
          paddingTop: 10,
        }}>
        <StreamContainer navigation={navigation} />
      </ScrollView>
    </>
  );
}
