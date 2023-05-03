import React, {useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';
import {Text} from 'react-native';

const HostComponent = () => {
  const [videoCall, setVideoCall] = useState(true);
  const connectionData = {
    appId: '955fcded0fd1479a805276c006f36a23',
    channel: 'munyyb',
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <AgoraUIKit
      connectionData={connectionData}
      rtcCallbacks={callbacks}
      style={{height: '100%', width: '100%'}}
    />
  ) : (
    <Text onPress={() => setVideoCall(true)}>Start Call</Text>
  );
};

export default HostComponent;
