import React,{useState,useEffect} from "react";
import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { theme } from "../../Theme/Theme";
import { GetAllUsers } from "../../../client/requests";

export const PeopleMayKnow = ({ navigation }) => {

  // const {userData, fetchUserData} = useUserDataHandler();
  const [users, setUsers]  = useState([])

  useEffect(()=>{
    GetAllUsers().then((res)=>{
      console.log(res)
      if(res){
        setUsers(res.users)
      }
    })
  }, [])

  const ProfData = [
    {
      key: "1",
      photo: require("../../assets/prof.jpeg"),
      title: "example title 1",
      subtitle: "example subtitle 1",
    },
    {
      key: "2",
      photo: require("../../assets/prof.jpeg"),
      title: "example title 2",
      subtitle: "example subtitle 2",
    },
    {
      key: "3",
      photo: require("../../assets/prof.jpeg"),
      title: "example title 3",
      subtitle: "example subtitle 3",
    },
    {
      key: "4",
      photo: require("../../assets/prof.jpeg"),
      title: "example title 3",
      subtitle: "example subtitle 3",
    },
    {
      key: "5",
      photo: require("../../assets/prof.jpeg"),
      title: "example title 3",
      subtitle: "example subtitle 3",
    },
  ];

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
    <>
      <View style={styles.container}>
        <View style={styles.middleContainer}>
          <Text style={styles.textOfMiddle}>People you may like</Text>
        </View>

        <ScrollView style={styles.lowerContainer}>
          {users.map((element) => {
            return (
              <View 
                style={styles.innerContentofLowerContainer}
                key={element.key}
              >
                <View style={styles.innerContentofLowerContainerDiv}>
                  <View>
                    <Image
                      source={require("../../assets/prof.jpeg")}
                      style={styles.photoFindFriend}
                    />
                  </View>

                  <View
                    style={styles.textContainerLower}
                    
                  >
                    <Text style={{ textAlign: "center", fontWeight: "900" }} onPress={() => navigation.navigate("UserProfileScreen")}>
                      {element.first_name}
                    </Text>
                    <Text style={{ textAlign: "center" }}>{element.last_name}</Text>
                    <Pressable style={styles.button} >
                      <Text>Follow</Text>
                    </Pressable>
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
    height: "100%",
    backgroundColor: "#e3e3e3",
    marginBottom: 5,
  },

  //Middle Container Styling starts from here
  middleContainer: {
    // flex: 1,
    width: "100%",
    height: 30,
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  textOfMiddle: {
    fontSize: 18,
  },

  //Lower Container Styling starts from here
  lowerContainer: {
    width: "100%",
    alignContent: "center",
    backgroundColor: "#e3e3e3",
  },
  innerContentofLowerContainer: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    height: 300,
  },
  photoFindFriend: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    margin: 20,
    // marginTop: 10,
    // marginLeft: 10,
    borderRadius: 65,
  },
  textContainerLower: {
    display: "flex",
    flexDirection: "column",
    margin: 5,
    // marginLeft: 20,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    textAlign: "center",
    alignItems: "center",
    margin: 20,
    borderColor: "#578ea8",
    height: 40,
    width: 100,
    justifyContent: "center",
    borderRadius: 10,
  },
  innerContentofLowerContainerDiv: {
    display: "flex",
    flexDirection: "column",
  },
});
