import React from 'react';
import {useState, useEffect} from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import {View, ActivityIndicator} from 'react-native';
import Paragraph from '../components/Paragraph';
import {
  clearLocalStorageSession,
  getLocalStorageSession,
} from '../../client/requests';
import {useUserDataHandler} from '../../context/UserInfoContext';
import {theme} from '../Theme/Theme';

export default function SplashScreen({navigation}) {
  const [session, setSession] = useState(null);
  const {userData, fetchUserData} = useUserDataHandler();

  useEffect(() => {
    console.log('Local Session:', session);
    if (session) {
      if (session.user_id) {
        fetchUserData(session.user_id);
        navigation.reset({
          index: 0,
          routes: [{name: 'Tabs'}],
        });
      }
    } else if (session == false) {
      navigation.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      });
    }
  }, [session]);
  useEffect(() => {
    getLocalStorageSession().then(res => {
      setSession(res);
    });
  }, []);
  return (
    <Background>
      <Header>Lively Go</Header>
      <Paragraph>
        Explore the World by Watching and Creating live Broadcasts
      </Paragraph>
      <View style={{marginTop: 100}}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    </Background>
  );
}
