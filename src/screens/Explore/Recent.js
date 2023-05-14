import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, Pressable} from 'react-native';
import {ScrollView} from 'react-native';
import {Image} from 'react-native';
import {GetAllStreams} from '../../../client/requests';
import {useUserDataHandler} from '../../../context/UserInfoContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const RecentFriends = ({navigation}) => {
  //* States
  const [users, setUsers] = useState([]);

  // ** global user state
  const {userData} = useUserDataHandler();

  function handleJoinStream(element) {
    navigation.navigate('HostStreamScreen', {
      name: element.name,
      streamId: element.id,
      status: element.status,
      userName: userData.user_name,
      liveId: element.liveId,
      userId: userData.user_id, // current user
      ownerId: element.userId, //stream owner
    });
  }

  useEffect(() => {
    GetAllStreams().then(res => {
      console.log('Live streams:', res);
      if (res) {
        setUsers(res.users);
      }
    });
  }, []);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={{fontSize: 15, marginLeft: 3}}>RECENT STREAMS (5)</Text>
          <Text style={{fontSize: 15, marginRight: 3, color: '#578ea8'}}>
            Play unwatched(5)
          </Text>
        </View>
        <ScrollView style={styles.upperContainer}>
          {users.map((element, index) => {
            return (
              <Pressable onPress={() => handleJoinStream(element)} key={index}>
                <View style={styles.innerContentofUpperContainer}>
                  <View
                    style={{
                      height: '90%',
                      width: 100,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'rgba(0, 0,250,0.15)',
                      borderRadius: 10,
                    }}>
                    <MaterialCommunityIcons name="broadcast" size={26} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      {element.name}
                    </Text>
                    <Text>{element.description}</Text>
                    <View
                      style={{
                        backgroundColor: 'rgba(255,0,0,0.15)',
                        padding: 2,
                        borderRadius: 50,
                        width: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                      }}>
                      <Text style={{color: 'red'}}>{element.status}</Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    height: '100%',
    backgroundColor: '#e3e3e3',
    marginBottom: 5,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
  },
  upperContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  innerContentofUpperContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 10,
  },
  photo: {
    width: 100,
    height: 100,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
  },
  middleContainer: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    margin: 5,
  },
  textOfMiddle: {
    fontSize: 18,
  },
});
