import React, {useState} from 'react';
import {Alert} from 'react-native';
import {View} from 'react-native';
import {Pressable, Modal} from 'react-native';
import {Text} from 'react-native';
import {useUserDataHandler} from '../../context/UserInfoContext';
import {theme} from '../Theme/Theme';

export default function SendHeartsBtn({name, streamOwnerId}) {
  //** States */
  const [sendModel, setSendModel] = useState(false);
  const [loading, setLoading] = useState(false);
  // ** global user state
  const {userData, fetchUserData} = useUserDataHandler();
  return (
    <>
      {sendModel ? (
        <Modal
          animationType="slide"
          statusBarTranslucent={true}
          presentationStyle="fullScreen"
          visible={sendModel}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setSendModel(!sendModel);
          }}>
          <View
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                color: theme.colors.primary,
              }}>
              Hi, {userData.user_name}
            </Text>
            <Text style={{fontSize: 18, color: theme.colors.primary}}>
              You have, {userData.hearts} hearts in you account.
            </Text>
            <Pressable
              style={{
                paddingHorizontal: 15,
                width: 300,
                paddingVertical: 20,
                borderRadius: 10,
                borderColor: theme.colors.primary,
                borderWidth: 2,
                marginTop: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 16}}>❤️ Send 50 Hearts</Text>
            </Pressable>
            <Pressable
              style={{
                paddingHorizontal: 15,
                width: 300,
                paddingVertical: 20,
                borderRadius: 10,
                borderColor: theme.colors.primary,
                borderWidth: 2,
                marginTop: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 16}}>❤️ Send 100 Hearts</Text>
            </Pressable>
            <Pressable
              style={{
                paddingHorizontal: 15,
                width: 300,
                paddingVertical: 20,
                borderRadius: 10,
                borderColor: theme.colors.primary,
                borderWidth: 2,
                marginTop: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 16}}>❤️ Send 500 Hearts</Text>
            </Pressable>
          </View>
        </Modal>
      ) : (
        <></>
      )}
      <Pressable
        onPress={() => setSendModel(true)}
        style={{padding: 10, borderRadius: 50, backgroundColor: 'white'}}>
        <Text style={{fontSize: 20}}>❤️</Text>
      </Pressable>
    </>
  );
}
