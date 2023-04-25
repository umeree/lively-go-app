import React from "react";
import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";

export const RecentFriends = ({ navigation }) => {
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
        <View style={styles.topContainer}>
          <Text style={{ fontSize: 15, marginLeft: 3 }}>
            RECENT FRIENDS (5)
          </Text>
          <Text style={{ fontSize: 15, marginRight: 3, color: "#578ea8" }}>
            Play unwatched(5)
          </Text>
        </View>
        <ScrollView style={styles.upperContainer}>
          {ProfData.map((element) => {
            return (
              <View
                style={styles.innerContentofUpperContainer}
                key={element.key}
              >
                <Image source={element.photo} style={styles.photo} />
                <View style={styles.textContainer}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {element.subtitle}
                  </Text>
                  <Text>{element.title}</Text>
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
    height: "100%",
    backgroundColor: "#e3e3e3",
    marginBottom: 5,
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 55,
  },
  upperContainer: {
    width: "100%",
    height: "40%",
    display: "flex",
    flexDirection: "column",
  },
  innerContentofUpperContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 10,
  },
  photo: {
    width: 100,
    height: 100,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
  },
  middleContainer: {
    width: "100%",
    height: 30,
    justifyContent: "center",
    margin: 5,
  },
  textOfMiddle: {
    fontSize: 18,
  },
});
