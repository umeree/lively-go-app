import React, {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {followUser} from '../../client/requests';
import {useUserDataHandler} from '../../context/UserInfoContext';
import Toast from 'react-native-toast-message';
import {ActivityIndicator} from 'react-native-paper';
import {theme} from '../Theme/Theme';
import {Text} from 'react-native';

export default function FollowBtn({friendsId, userName, type = 'defualt'}) {
  const [isAddEligible, setIsAddEligible] = useState(null);
  //** states */
  const [loading, setLoading] = useState(false);
  // ** global user state
  const {userData, fetchUserData, followings} = useUserDataHandler();
  async function handleAddFriend() {
    if (userData.user_id == friendsId) {
      Toast.show({
        type: 'error',
        text1: 'Following',
        text2: `You can not follow yourself!`,
      });
    } else {
      setLoading(true);
      await followUser(userData.user_id, friendsId).then(res => {
        if (!res.error) {
          if (res.data) {
            Toast.show({
              type: 'success',
              text1: 'Following',
              text2: `${userName} sucessfully added to your followings!`,
            });
            setLoading(false);
            fetchUserData(userData.user_id);
          } else {
            Toast.show({
              type: 'error',
              text1: 'Following',
              text2: `You already follow ${userName} `,
            });
            setLoading(false);
          }
        } else {
          Toast.show({
            type: 'error',
            text1: 'Following',
            text2: `${userName} failed to add to your followings!`,
          });
          setLoading(false);
        }
      });
    }
  }

  //* Checking eligibility
  useEffect(() => {
    const eligibility = followings.find(
      following => following.following.id == friendsId,
    );
    if (eligibility) {
      setIsAddEligible(false);
    } else {
      setIsAddEligible(true);
    }
  }, []);

  const design =
    type == 'defualt'
      ? {
          height: 40,
          width: 80,
          backgroundColor: theme.colors.secondary,
          borderRadius: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }
      : type == 'full'
      ? {
          height: 50,
          width: '100%',
          backgroundColor: theme.colors.secondary,
          borderRadius: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }
      : {};

  const font =
    type == 'defualt'
      ? {color: 'white', fontSize: 16}
      : type == 'full'
      ? {color: 'white', fontSize: 24}
      : {};
  return (
    <>
      {isAddEligible ? (
        <Pressable style={design} onPress={() => handleAddFriend()}>
          {loading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={font}>Follow</Text>
          )}
        </Pressable>
      ) : (
        <></>
      )}
    </>
  );
}
