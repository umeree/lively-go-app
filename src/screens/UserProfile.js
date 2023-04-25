import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUserDataHandler } from "../../context/UserInfoContext";

function UserProfile({ navigation }) {
  const { userData } = useUserDataHandler();
  const ProfData = [
    {
      key: "1",
      photo: require("../assets/prof.jpeg"),

      subtitle: "@umery",
      icon: require("../assets/heart.png"),
      desc: "Im still not sure what you mean by . Can you please provide more context or clarify your question?",
    },
  ];
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {ProfData.map((element) => {
          return (
            <View style={styles.data}>
              <Image style={styles.dataImage} source={element.photo} />
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 30,
                }}
              >
                {userData?.first_name}
              </Text>
              <Text style={{ textAlign: "center", fontWeight: "200" }}>
                {userData?.last_name}
              </Text>
              <View style={styles.iconContainer}>
                <Image style={styles.icon} source={element.icon} />
                <Text style={{ marginLeft: 2, fontSize: 18 }}>25</Text>
              </View>
              <View style={{ width: "90%" }}>
                <Text style={{ fontWeight: "200", marginTop: 5 }}>
                  {element.desc}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.followerFollowingList}>
        <View style={styles.recent}>
          <Text style={{ fontSize: 15, textAlign: "center", color: "#52a0c6" }}>
            0
          </Text>
          <Text style={{ fontSize: 13, textAlign: "center", color: "#52a0c6" }}>
            RECENT
          </Text>
        </View>
        <View style={styles.followers} style={{ marginLeft: 10 }}>
          <Text
            onPress={() => navigation.navigate("Followers")}
            style={{ fontSize: 15, textAlign: "center", color: "#52a0c6" }}
          >
            500
          </Text>
          <Text
            onPress={() => navigation.navigate("Followers")}
            style={{ fontSize: 13, textAlign: "center", color: "#52a0c6" }}
          >
            FoLLOWERS
          </Text>
        </View>
        <View style={styles.following}>
          <Text
            onPress={() => navigation.navigate("Following")}
            style={{ fontSize: 15, textAlign: "center", color: "#52a0c6" }}
          >
            1000
          </Text>
          <Text
            onPress={() => navigation.navigate("Following")}
            style={{ fontSize: 13, textAlign: "center", color: "#52a0c6" }}
          >
            FOLLOWING
          </Text>
        </View>
      </View>
      <View style={styles.recentStreams}></View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={{ color: "#52a0c6", fontSize: 20 }}>Follow</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // textAlign: "center",

    // margin: 100,
  },
  data: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  dataImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
    // justifyContent: "center",
  },
  icon: {
    width: 20,
    height: 20,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  followerFollowingList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  recentStreams: {
    height: 250,
    // backgroundColor: "#52a0c6",
  },
  buttonContainer: {
    width: 280,
    height: 45,
    // backgroundColor : "#52a0c6",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: 25,
    marginLeft: 40,
    borderRadius: 40,
    borderColor: "#52a0c6",
    borderWidth: 1,
  },
  button: {
    borderRadius: 40,
  },
});

export default UserProfile;
