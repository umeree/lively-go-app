import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AgoraUIKit from 'agora-rn-uikit';
export default function HostComponent(props) {
  const [videoCall, setVideoCall] = useState(true);
  const connectionData = {
    appId: '784647b343ef4943a91bd988b267d4a8',
    channel: 'Munyyb',
    token:
      '007eJxTYJArtqp3PGT88PoN75ZNwqlLu1hTpgXtcz/9/Y3ab8X2aWcVGMwtTMxMzJOMTYxT00wsTYwTLQ2TUiwtLJKMzMxTTBItbu7xTmkIZGTYueIiKyMDBIL4bAy+pXmVlUkMDAC/IiGh',
  };
  const rtcCallbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks} />
  ) : (
    <Text onPress={() => setVideoCall(true)}>Start Call</Text>
  );
}
