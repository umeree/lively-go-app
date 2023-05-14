import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, Pressable} from 'react-native';
import {ScrollView} from 'react-native';
import {useUserDataHandler} from '../../../../context/UserInfoContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {GetAllStreams} from '../../../../client/requests';

export default function StreamContainer({navigation}) {
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
        <ScrollView style={styles.upperContainer}>
          {users.map((element, index) => {
            return (
              <View
                style={styles.innerContentofUpperContainer}
                onPress={() => handleJoinStream(element)}
                key={index}>
                <View
                  style={{
                    height: 100,
                    width: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3BA55D',
                    borderRadius: 10,
                  }}>
                  <MaterialCommunityIcons name="broadcast" size={26} />
                </View>
                <View style={styles.textContainer}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    {element.name}
                  </Text>
                  <Text style={{color: 'black'}}>{element.description}</Text>
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
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // backgroundColor: '#e3e3e3',
    paddingTop: 5,
  },
  upperContainer: {
    width: '100%',
    height: '100%',
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
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
  },
});
