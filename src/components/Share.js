import React from 'react';
import {Alert, Share, View, Button} from 'react-native';
import {useUserDataHandler} from '../../context/UserInfoContext';
import {Pressable} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {theme} from '../Theme/Theme';

const ShareStream = ({ownerId, name, description, username}) => {
  const {userData} = useUserDataHandler();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Lively-go | ${username} has started stream labeled '${name}'. Enjoy the streaming or hangout with your friends.  Download Lively-go app and add ${username} to view all the streams`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return ownerId == userData.user_id ? (
    <View style={{marginTop: 50}}>
      <Pressable
        onPress={onShare}
        style={{padding: 10, borderRadius: 50, backgroundColor: 'white'}}>
        <AntIcon name="sharealt" color={theme.colors.secondary} size={32} />
      </Pressable>
    </View>
  ) : (
    <></>
  );
};

export default ShareStream;
