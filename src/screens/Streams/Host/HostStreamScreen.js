import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import HostComponent from './Components.js/Host';

export default function HostStreamScreem({navigation}) {
  const APP_ID = 845259951;
  const APP_SIGNIN =
    '2301d5bd06367344f2003efba05cbc27457df8be4a583ae7419541bc3f33b95b';
  const USER_ID = '12345';
  const USERNAME = 'Muneeb';
  const LIVE_ID = '12345';

  return (
    <>
      <HostComponent
        navigation={navigation}
        APP_ID={APP_ID}
        APP_SIGNIN={APP_SIGNIN}
        USERNAME={USERNAME}
        USER_ID={USER_ID}
        LIVE_ID={LIVE_ID}
      />
    </>
  );
}
