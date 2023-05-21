import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, Pressable} from 'react-native';
import {ScrollView} from 'react-native';
import {Image} from 'react-native';
import {theme} from '../../Theme/Theme';
import {GetAllUsers} from '../../../client/requests';
import FollowBtn from '../../components/FollowBtn';

export const PeopleMayKnow = ({navigation}) => {
  // const {userData, fetchUserData} = useUserDataHandler();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    GetAllUsers().then(res => {
      console.log(res);
      if (res) {
        setUsers(res.users);
      }
    });
  }, []);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.middleContainer}>
          <Text style={styles.textOfMiddle}>People you may like</Text>
        </View>

        <ScrollView style={styles.lowerContainer}>
          {users.map((element, index) => {
            return (
              <View style={styles.innerContentofLowerContainer} key={index}>
                <View style={styles.innerContentofLowerContainerDiv}>
                  <View>
                    <Image
                      source={require('../../assets/prof.jpeg')}
                      style={styles.photoFindFriend}
                    />
                  </View>

                  <View style={styles.textContainerLower}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontWeight: '900',
                        fontSize: 20,
                        color: 'black',
                      }}
                      onPress={() =>
                        navigation.navigate('UserProfileScreen', {
                          userId: element.id,
                        })
                      }>
                      {element.first_name.toUpperCase()}{' '}
                      {element.last_name.toUpperCase()}
                    </Text>
                    <Text style={{textAlign: 'center', color: 'black'}}>
                      {element.user.user_name}
                    </Text>
                    <View style={{marginTop: 10}}>
                      <FollowBtn
                        friendsId={element.user.id}
                        userName={element.user.user_name}
                      />
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'column',
    height: '100%',
    backgroundColor: '#e3e3e3',
    marginBottom: 5,
  },

  //Middle Container Styling starts from here
  middleContainer: {
    // flex: 1,
    width: '100%',
    height: 30,
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  textOfMiddle: {
    fontSize: 18,
    color: 'black',
  },

  //Lower Container Styling starts from here
  lowerContainer: {
    width: '100%',
    alignContent: 'center',
    backgroundColor: '#e3e3e3',
  },
  innerContentofLowerContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: 300,
  },
  photoFindFriend: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 20,
    // marginTop: 10,
    // marginLeft: 10,
    borderRadius: 65,
  },
  textContainerLower: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    textAlign: 'center',
    alignItems: 'center',
    margin: 20,
    borderColor: '#578ea8',
    height: 40,
    width: 100,
    justifyContent: 'center',
    borderRadius: 10,
  },
  innerContentofLowerContainerDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
