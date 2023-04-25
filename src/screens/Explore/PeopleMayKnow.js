import React from "react";
import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { theme } from "../../Theme/Theme";

export const PeopleMayKnow = ({ navigation }) => {
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
  return (
    <>
      <View style={styles.container}>
        <View style={styles.middleContainer}>
          <Text style={styles.textOfMiddle}>People you may like</Text>
        </View>

        <ScrollView style={styles.lowerContainer}>
          {ProfData.map((element) => {
            return (
              <View
                style={styles.innerContentofLowerContainer}
                key={element.key}
              >
                <View style={styles.innerContentofLowerContainerDiv}>
                  <View>
                    <Image
                      source={element.photo}
                      style={styles.photoFindFriend}
                    />
                  </View>

                  <View
                    style={styles.textContainerLower}
                    onPress={() => navigation.navigate("UserProfileScreen")}
                  >
                    <Text style={{ textAlign: "center" }}>
                      {element.subtitle}
                    </Text>
                    <Text style={{ textAlign: "center" }}>{element.title}</Text>
                    <Pressable style={styles.button}>
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
