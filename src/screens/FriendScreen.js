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
import {theme} from '../Theme/Theme';
import {ActivityIndicator} from 'react-native-paper';
import {followUser, serachUsers} from '../../client/requests';
import {useUserDataHandler} from '../../context/UserInfoContext';
import Toast from 'react-native-toast-message';
import FollowBtn from '../components/FollowBtn';

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
            placeholderTextColor="black"
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
        {searchResult == null && loading == false ? (
          <View style={{marginTop: 50}}>
            <Text style={{color: 'black'}}>{data}</Text>
          </View>
        ) : (
          <ScrollView
            style={{
              width: '100%',
              paddingHorizontal: 20,
            }}>
            <View style={{marginBottom: 10}}>
              <Text style={{fontSize: 16, color: 'black'}}>Search Results</Text>
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
                      <Text
                        style={{opacity: 0.8, fontSize: 16, color: 'black'}}>
                        @{user.user_name}
                      </Text>
                    </View>
                  </View>
                  <FollowBtn
                    friendsId={user.user_id}
                    userName={user.user_name}
                  />
                </View>
              );
            })}
          </ScrollView>
        )}
        {/* loader */}
        {loading ? (
          <ActivityIndicator
            size="large"
            color={theme.colors.secondary}
            style={{marginTop: '25%'}}
          />
        ) : (
          ''
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
