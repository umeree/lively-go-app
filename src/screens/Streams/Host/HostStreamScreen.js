import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import HostComponent from './Components/Host';
import {SafeAreaView} from 'react-native-safe-area-context';
import 'react-native-get-random-values';
import FollowBtn from '../../../components/FollowBtn';
import SendHeartsBtn from '../../../components/SendHeartsBtn';
import ShareStream from '../../../components/Share';

export default function HostStreamScreen({navigation, route}) {
  //** Fetch params from navigation */
  const {
    name,
    streamId,
    status,
    userName,
    liveId,
    userId,
    ownerId,
    description,
  } = route.params;
  const APP_ID = 399249957;
  const APP_SIGNIN =
    'c4953289764a459f2859cc08d86e9cf75258f6f6d9ba5cdb22fcb7726f701638';
  const USER_ID = userId;
  const USERNAME = userName;
  const LIVE_ID = liveId;

  return (
    <>
      <SafeAreaView>
        <View style={{height: '100%', width: '100%', position: 'relative'}}>
          <View
            style={{position: 'absolute', right: 10, top: 350, zIndex: 1000}}>
            <SendHeartsBtn ownerId={ownerId} />
          </View>
          <View
            style={{position: 'absolute', right: 10, top: 350, zIndex: 1000}}>
            <ShareStream
              ownerId={ownerId}
              name={name}
              description={description}
              username={userName}
            />
          </View>
          <HostComponent
            navigation={navigation}
            APP_ID={APP_ID}
            APP_SIGNIN={APP_SIGNIN}
            USERNAME={USERNAME}
            USER_ID={USER_ID}
            LIVE_ID={LIVE_ID}
            STREAM_ID={streamId}
            OWNER_ID={ownerId}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
