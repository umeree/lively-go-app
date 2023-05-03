import React from 'react';
import {StyleSheet, View} from 'react-native';
import ZegoUIKitPrebuiltLiveStreaming, {
  HOST_DEFAULT_CONFIG,
  ZegoMenuBarButtonName,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';

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
        }}
      />
    </View>
  );
}
