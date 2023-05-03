import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {theme} from '../../../Theme/Theme';
import ScreenHeader from '../../../components/Header/ScreenHeader';
import Header from '../../../components/Header';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import {streamNameValidator} from '../../../Validators/streamNameValidator';
import {streamDescValidator} from '../../../Validators/streamDescValidator';
import Toast from 'react-native-toast-message';
import {CreateStream} from '../../../../client/requests';
import {v4 as uuidv4} from 'uuid';
import {useUserDataHandler} from '../../../../context/UserInfoContext';

export default function InitialPublishStream({navigation}) {
  const {userData} = useUserDataHandler();
  const [channeName, setChannelName] = useState({
    value: '',
    error: '',
  });
  const [channeDesc, setChanneDesc] = useState({
    value: '',
    error: '',
  });

  // Shows notification for login
  const showSuccessToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Stream',
      text2: 'Successfully created stream 🚀',
    });
  };
  const showErrorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Stream',
      text2: 'Some problem occured while creating a stream channel ❌',
    });
  };

  function onCreateStream() {
    console.log('Create Stream!');
    const nameError = streamNameValidator(channeName.value);
    const descError = streamDescValidator(channeDesc.value);
    if (nameError || descError) {
      setChannelName({...channeName, error: nameError});
      setChanneDesc({...channeDesc, error: descError});
      return;
    } else {
      //** Create stream credentials */
      const liveId = uuidv4();
      const userId = userData.user_id;
      const userName = userData.user_name;
      console.log('Stream');
      CreateStream(channeName.value, channeDesc.value, liveId, userId).then(
        res => {
          if (!res.error) {
            showSuccessToast();
            navigation.navigate('HostStreamScreen', {
              name: res.name,
              streamId: res.streamId,
              status: res.status,
              userName: userName,
              liveId: res.liveId,
            });
          } else {
            showErrorToast();
          }
        },
      );
    }
  }
  return (
    <>
      <ScreenHeader navigation={navigation} title="Create Stream" />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: '5%',
          marginTop: 55,
        }}>
        <Header>Please fill in the channel name</Header>
        <TextInput
          label="Channel Name"
          returnKeyType="next"
          value={channeName.value}
          onChangeText={text => setChannelName({value: text, error: ''})}
          error={!!channeName.error}
          errorText={channeName.error}
          autoCapitalize="none"
          autoCompleteType="name"
          textContentType="name"
        />
        <TextInput
          label="Channel Description"
          returnKeyType="next"
          value={channeDesc.value}
          onChangeText={text => setChanneDesc({value: text, error: ''})}
          error={!!channeDesc.error}
          errorText={channeDesc.error}
          autoCapitalize="none"
          autoCompleteType="name"
          textContentType="name"
        />
        <Button mode="outlined" onPress={onCreateStream}>
          Create Stream Channel
        </Button>
      </View>
    </>
  );
}
