import React, {useState} from 'react';
import {Alert} from 'react-native';
import {View} from 'react-native';
import {Pressable, Modal} from 'react-native';
import {Text} from 'react-native';
import {useUserDataHandler} from '../../context/UserInfoContext';
import {theme} from '../Theme/Theme';
import Toast from 'react-native-toast-message';
import {ActivityIndicator} from 'react-native-paper';
import {sendHearts} from '../../client/requests';

export default function SendHeartsBtn({ownerId}) {
  //** States */
  const [sendModel, setSendModel] = useState(false);
  const [loading, setLoading] = useState(false);
  // ** global user state
  const {userData, fetchUserData} = useUserDataHandler();
  function handleSendHearts(hearts) {
    if (hearts <= parseInt(userData.hearts)) {
      sendHearts(userData.user_id, ownerId, hearts).then(res => {
        console.log(res);
        if (!res.error) {
          Toast.show({
            type: 'success',
            text1: 'Hearts',
            text2: `Hearts send successfully!`,
          });
          fetchUserData(userData.user_id);
          setSendModel(!sendModel);
        } else {
          setSendModel(!sendModel);
          Toast.show({
            type: 'error',
            text1: 'Hearts',
            text2: `Failed to send hearts, please try again later!`,
          });
        }
      });
    } else {
      setSendModel(!sendModel);
      Toast.show({
        type: 'error',
        text1: 'Hearts',
        text2: `You do not have enough hearts! Pleas go into profile and buy a packga of 1000 hearts.`,
      });
    }
  }
  console.log(
    '----------------------------------->',
    ownerId,
    userData.user_id,
  );
  return (
    <>
      {ownerId == userData.user_id ? (
        <></>
      ) : sendModel ? (
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
              }}
              onPress={() => handleSendHearts(50)}>
              <Text style={{fontSize: 16, color: theme.colors.primary}}>
                ❤️ Send 50 Hearts
              </Text>
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
              }}
              onPress={() => handleSendHearts(100)}>
              <Text style={{fontSize: 16, color: theme.colors.primary}}>
                ❤️ Send 100 Hearts
              </Text>
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
              }}
              onPress={() => handleSendHearts(500)}
              s>
              <Text style={{fontSize: 16, color: theme.colors.primary}}>
                ❤️ Send 500 Hearts
              </Text>
            </Pressable>
          </View>
        </Modal>
      ) : (
        <></>
      )}
      {ownerId == userData.user_id ? (
        <></>
      ) : (
        <Pressable
          onPress={() => setSendModel(true)}
          style={{padding: 10, borderRadius: 50, backgroundColor: 'white'}}>
          <Text style={{fontSize: 20}}>❤️</Text>
        </Pressable>
      )}
    </>
  );
}
