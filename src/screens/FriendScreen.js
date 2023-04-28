import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../components/Button';
import {API_URL} from '../../API_URL';
import {theme} from '../Theme/Theme';

const FriendScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  const api_call = () => {
    console.log(API_URL);
    fetch(`${API_URL}/api/v1/all_users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async res => {
        try {
          // console.log(res);
          const jsonRes = await res.json();
          if (res.status !== 200) {
            // setIsError(true);
            // setMessage(jsonRes.message);
          } else {
            console.log(jsonRes);
            setData(jsonRes.users);
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    api_call();
  }, []);

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
            }}>
            <Text>Search</Text>
          </Pressable>
        </View>
      </View>
      {/* Friend list section */}
      <View>
        {data?.map((contact, index) => (
          <View key={index} style={styles.row}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Image
                source={require('../assets/me.png')}
                style={styles.image}
              />
              <Text style={styles.text}>
                {contact.first_name} {contact.last_name}
              </Text>
            </View>
            <Pressable>
              <Text>Follow</Text>
            </Pressable>
          </View>
        ))}
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
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    marginLeft: 70,
    justifyContent: 'space-between',
    width: '80%',
  },
  text: {
    color: 'black',
    fontSize: 18,
    marginLeft: 5,
  },
  starredIcon: {
    width: 55,
    height: 55,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});

export default FriendScreen;
