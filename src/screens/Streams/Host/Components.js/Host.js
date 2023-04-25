import React from 'react';
import {StyleSheet, View} from 'react-native';
import ZegoUIKitPrebuiltLiveStreaming, {
  HOST_DEFAULT_CONFIG,
  ZegoMenuBarButtonName,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';
// import ZegoUIKitSignalingPlugin from '@zegocloud/zego-uikit-signaling-plugin-rn';
export default function HostComponent(props) {
  return (
    <View>
      <ZegoUIKitPrebuiltLiveStreaming
        appID={props.APP_ID}
        appSign={props.APP_SIGNIN}
        userID={props.USER_ID}
        userName={props.USERNAME}
        liveID={props.LIVE_ID}
        config={{
          ...HOST_DEFAULT_CONFIG,
          bottomMenuBarConfig: {
            hostButtons: [
              ZegoMenuBarButtonName.toggleCameraButton,
              ZegoMenuBarButtonName.toggleMicrophoneButton,
              ZegoMenuBarButtonName.switchCameraButton,
            ],
            coHostButtons: [
              ZegoMenuBarButtonName.toggleCameraButton,
              ZegoMenuBarButtonName.toggleMicrophoneButton,
              ZegoMenuBarButtonName.switchCameraButton,
              ZegoMenuBarButtonName.coHostControlButton,
            ],
            audienceButtons: [ZegoMenuBarButtonName.coHostControlButton],
            hostExtendButtons: [],
            coHostExtendButtons: [],
            audienceExtendButtons: [],
            maxCount: 5,
          },
          onLeaveLiveStreamingConfirming: () => {
            // Modify your custom configurations here.
            return new Promise((resolve, reject) => {
              Alert.alert(
                'Leave Stream',
                'Are you sure you want to leave this stream?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => reject(),
                    style: 'cancel',
                  },
                  {
                    text: 'Exit',
                    onPress: () => resolve(),
                  },
                ],
              );
            });
          },
          turnOnCameraWhenJoining: true, // Modify your custom configurations here.
          turnOnMicrophoneWhenJoining: true, // Modify your custom configurations here.
        }}
      />
    </View>
  );
}
