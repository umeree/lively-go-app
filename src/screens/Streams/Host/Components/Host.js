import React from 'react';
import {StyleSheet, View} from 'react-native';
import ZegoUIKitPrebuiltLiveStreaming, {
  HOST_DEFAULT_CONFIG,
  ZegoMenuBarButtonName,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';
import {UpdateStream} from '../../../../../client/requests';
import Toast from 'react-native-toast-message';

export default function HostPage(props) {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <ZegoUIKitPrebuiltLiveStreaming
        appID={props.APP_ID}
        appSign={props.APP_SIGNIN}
        userID={props.USER_ID}
        userName={props.USERNAME}
        liveID={props.LIVE_ID}
        config={{
          ...HOST_DEFAULT_CONFIG,
          onLeaveLiveStreaming: () => {
            props.navigation.navigate('Tabs');
          },
          turnOnCameraWhenJoining: false, // Modify your custom configurations here.
          turnOnMicrophoneWhenJoining: true, // Modify your custom configurations here.
          onLeaveLiveStreaming: () => {
            //** End stream if the cuurent user is the owner of the stream */
            console.log(`${props.USER_ID} == ${props.OWNER_ID}`);
            if (props.USER_ID == props.OWNER_ID) {
              UpdateStream(props.STREAM_ID, 'ended').then(res => {
                console.log('Stream ended:', res);
                Toast.show({
                  type: 'success',
                  text1: 'Stream',
                  text2: 'Live Stream Ended',
                });
              });
            }
            props.navigation.navigate('Tabs');
          },
          onLiveStreamingEnded: () => {
            props.navigation.navigate('Tabs');
          },
        }}
      />
    </View>
  );
}
