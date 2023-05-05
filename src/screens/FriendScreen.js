import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../components/Button';
import {API_URL} from '../../API_URL';
import {theme} from '../Theme/Theme';
import {ActivityIndicator} from 'react-native-paper';
import {followUser, serachUsers} from '../../client/requests';
import {useUserDataHandler} from '../../context/UserInfoContext';
import Toast from 'react-native-toast-message';

const FriendScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // ** global user state
  const {userData, fetchUserData} = useUserDataHandler();

  function handleSearch() {
    setSearchResult(null);
    setLoading(true);
    serachUsers(searchTerm).then(res => {
      if (!res.error) {
        setSearchResult(res.users);
        setLoading(false);
      } else {
        setSearchResult(false);
        setLoading(false);
      }
    });
  }

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(`${API_URL}/api/v1/all_users/data`);
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // fetchData();

  function handleAddFriend(friendsId, user_name) {
    if (userData.user_id == friendsId) {
      Toast.show({
        type: 'error',
        text1: 'Following',
        text2: `You can not follow yourself!`,
      });
    } else {
      followUser(userData.user_id, friendsId).then(res => {
        if (!res.error) {
          Toast.show({
            type: 'success',
            text1: 'Following',
            text2: `${user_name} sucessfully added to your followings!`,
          });
          fetchUserData(userData.user_id);
        }
      });
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          height: '12%',
          backgroundColor: theme.colors.primary,
          width: '100%',
          display: 'flex',
          alignItems: 'space-between',
          justifyContent: 'center',
          paddingHorizontal: 0,
        }}>
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AntDesign
            name="search1"
            color="white"
            size={32}
            style={{marginRight: 10}}
          />
          <TextInput
            returnKeyType="done"
            style={styles.input}
            placeholder="Search"
            onChangeText={newSearchTerm => setSearchTerm(newSearchTerm)}
            value={searchTerm}
          />
          <Pressable
            style={{
              padding: 10,
              backgroundColor: theme.colors.secondary,
              color: 'white',
              borderRadius: 10,
            }}
            onPress={() => handleSearch()}>
            <Text style={{color: 'white'}}>Search</Text>
          </Pressable>
        </View>
      </View>
      <View style={{marginTop: 15, width: '100%'}}>
        {/* Friend list section */}
        {loading ? (
          <ActivityIndicator
            size="large"
            color={theme.colors.secondary}
            style={{marginTop: '25%'}}
          />
        ) : (
          ''
        )}
        {searchResult == null && loading == false ? (
          <View style={{marginTop: 50}}>
            {/* <Text
              style={{
                fontSize: 22,
                color: 'black',
                textAlign: 'center',
                opacity: 0.5,
              }}>
              Nothing to show, kindly search something! plzz
            </Text> */}

            <Text>{data}</Text>
          </View>
        ) : (
          <ScrollView
            style={{
              width: '100%',
              paddingHorizontal: 20,
            }}>
            <View style={{marginBottom: 10}}>
              <Text style={{fontSize: 16}}>Search Results</Text>
            </View>
            {searchResult?.map((user, index) => {
              return (
                <View key={index} style={styles.row}>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Image
                      source={require('../assets/me.png')}
                      style={styles.image}
                    />
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: 5,
                      }}>
                      <Text style={styles.text}>
                        {user.first_name} {user.last_name}
                      </Text>
                      <Text style={{opacity: 0.8, fontSize: 16}}>
                        @{user.user_name}
                      </Text>
                    </View>
                  </View>
                  <Pressable
                    style={{
                      padding: 8,
                      backgroundColor: theme.colors.secondary,
                      borderRadius: 5,
                    }}
                    onPress={() =>
                      handleAddFriend(user.user_id, user.user_name)
                    }>
                    <Text style={{color: 'white'}}>Follow</Text>
                  </Pressable>
                </View>
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#FAF9F6',
    width: '60%',
    marginRight: 10,
  },
  TextSearch: {
    color: '#858585',
    fontSize: 20,
    paddingLeft: 10,
  },
  row: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});

export default FriendScreen;
