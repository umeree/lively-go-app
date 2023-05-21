import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useUserDataHandler} from '../../context/UserInfoContext';
import {getUserInformation} from '../client/requests';
import {getEndUserInformation} from '../../client/requests';
import FollowBtn from '../components/FollowBtn';

function UserProfile({navigation, route}) {
  const [user, setUser] = useState(null);
  const {userData} = useUserDataHandler();
  const {userId} = route.params;

  async function handleFetching() {
    const res = await getEndUserInformation(userId);
    if (!res.error) {
      console.log(res.data.user);
      setUser(res.data.user);
    } else {
      setUser(null);
    }
  }

  useEffect(() => {
    handleFetching();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.data}>
          <Image
            style={styles.dataImage}
            source={require('../assets/prof.jpeg')}
          />
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 30,
              color: 'black',
            }}>
            {user?.profile.first_name} {user?.profile.last_name}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 24,
              opacity: 0.5,
              fontWeight: '500',
              color: 'black',
            }}>
            {user?.user_name}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Image
              style={styles.icon}
              source={require('../assets/heart.png')}
            />
            <Text style={{marginLeft: 2, fontSize: 25}}>{user?.hearts}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}>
        <Pressable
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 32, fontWeight: '900', color: 'black'}}>
            {user?._count.following}
          </Text>
          <Text style={{color: 'black', fontSize: 18}}>Followings</Text>
        </Pressable>
        <View style={{width: 2, height: 50, backgroundColor: 'gray'}}></View>
        <Pressable
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 32, fontWeight: '900', color: 'black'}}>
            {user?._count.followers}
          </Text>
          <Text style={{color: 'black', fontSize: 18}}>Followers</Text>
        </Pressable>
        <View style={{width: 2, height: 50, backgroundColor: 'gray'}}></View>
        <Pressable
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 32, fontWeight: '900', color: 'black'}}>
            {user?._count.Stream}
          </Text>
          <Text style={{color: 'black', fontSize: 18}}>Streams</Text>
        </Pressable>
      </View>
      <View style={styles.recentStreams}></View>
      <View style={styles.buttonContainer}>
        <FollowBtn
          friendsId={user?.id}
          userName={user?.user_name}
          type="full"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  data: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  icon: {
    width: 20,
    height: 20,
  },
  followerFollowingList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  recentStreams: {
    height: 250,
  },
  buttonContainer: {
    width: 280,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 25,
    marginLeft: '15%',
  },
  button: {
    borderRadius: 40,
  },
});

export default UserProfile;
