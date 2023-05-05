import React from 'react';
import {StyleSheet, View} from 'react-native';
import ZegoUIKitPrebuiltLiveStreaming, {
  HOST_DEFAULT_CONFIG,
  ZegoMenuBarButtonName,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';
import {UpdateStream} from '../../../../../client/requests';
import Toast from 'react-native-toast-message';

export default function HostPage({APP_ID, APP_SIGNIN, USER_ID, USERNAME, LIVE_ID,OWNER_ID, STREAM_ID, navigation}) {
  console.log("Meta data:", APP_ID, APP_SIGNIN, USER_ID, USERNAME, LIVE_ID)
  return (
    <View style={{height: '100%', width: '100%'}}>
      <ZegoUIKitPrebuiltLiveStreaming
        appID={APP_ID}
        appSign={APP_SIGNIN}
        userID={USER_ID.toString()}
        userName={USERNAME}
        liveID={LIVE_ID.toString()}
        config={{
          ...HOST_DEFAULT_CONFIG,
          onLeaveLiveStreaming: () => {
            navigation.navigate('Tabs');
          },
          turnOnCameraWhenJoining: false, // Modify your custom configurations here.
          turnOnMicrophoneWhenJoining: true, // Modify your custom configurations here.
          onLeaveLiveStreaming: () => {
            //** End stream if the cuurent user is the owner of the stream */
            console.log(`${USER_ID} == ${OWNER_ID}`);
            if (USER_ID == OWNER_ID) {
              UpdateStream(STREAM_ID, 'ended').then(res => {
                console.log('Stream ended:', res);
                Toast.show({
                  type: 'success',
                  text1: 'Stream',
                  text2: 'Live Stream Ended',
                });
              });
            }
            navigation.navigate('Tabs');
          },
          onLiveStreamingEnded: () => {
            navigation.navigate('Tabs');
          },
        }}
      />
    </View>
  );
}
