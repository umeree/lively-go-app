import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../../components/BackButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {theme} from '../../Theme/Theme';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useUserDataHandler} from '../../../context/UserInfoContext';
import ScreenHeader from '../../components/Header/ScreenHeader';

function Followers({navigation}) {
  //** Global Context */
  const {userData, followers} = useUserDataHandler();
  return (
    <>
      <ScreenHeader navigation={navigation} title="Followers" />
      <SafeAreaView>
        <View style={styles.container}></View>
        <ScrollView style={{flexGrow: 1}}>
          <View style={styles.followersList}>
            {followers.length == 0 ? (
              <View
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 22}}>No followers!</Text>
              </View>
            ) : (
              <></>
            )}
            {followers.map((element, index) => {
              return (
                <View key={index}>
                  <View style={styles.data}>
                    <View style={styles.ImgnText}>
                      {/* {element.user.id} */}
                      <Image
                        style={styles.dataImage}
                        source={require('../../assets/prof.jpeg')}
                      />
                      <Text style={styles.dataText}>
                        {element.user.user_name}
                      </Text>
                    </View>
                    <Pressable
                      style={{
                        justifyContent: 'center',
                        padding: 12,
                        backgroundColor: theme.colors.secondary,
                        borderRadius: 10,
                      }}>
                      <Text>Follow</Text>
                    </Pressable>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: 2,
                      backgroundColor: '#e3e1e3',
                      marginVertical: 10,
                    }}></View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '10%',
  },
  followersList: {
    padding: 10,
  },

  data: {
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  ImgnText: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: "space-evenly",
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataImage: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },
  dataText: {
    fontSize: 20,
    marginLeft: 10,
    // paddingRight: 25,
  },
});

export default Followers;
