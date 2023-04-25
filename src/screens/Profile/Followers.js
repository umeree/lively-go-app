import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../../Theme/Theme";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

function Followers({ navigation }) {
  const FollowData = [
    {
      key: "1",
      photo: require("../../assets/prof.jpeg"),
      title: "Umer",
      subtitle: "@umery",
    },
    {
      key: "2",
      photo: require("../../assets/prof.jpeg"),
      title: "Ali",
      subtitle: "@ali",
    },
    {
      key: "3",
      photo: require("../../assets/prof.jpeg"),
      title: "Haider",
      subtitle: "@haider",
    },
    {
      key: "4",
      photo: require("../../assets/prof.jpeg"),
      title: "Fatima",
      subtitle: "@fatima",
    },
    {
      key: "5",
      photo: require("../../assets/prof.jpeg"),
      title: "Ayesha",
      subtitle: "@ayesha",
    },
    {
      key: "6",
      photo: require("../../assets/prof.jpeg"),
      title: "Fatima",
      subtitle: "@fatima",
    },
    {
      key: "5",
      photo: require("../../assets/prof.jpeg"),
      title: "Ayesha",
      subtitle: "@ayesha",
    },
    {
      key: "4",
      photo: require("../../assets/prof.jpeg"),
      title: "Fatima",
      subtitle: "@fatima",
    },
    {
      key: "5",
      photo: require("../../assets/prof.jpeg"),
      title: "Ayesha",
      subtitle: "@ayesha",
    },
    {
      key: "4",
      photo: require("../../assets/prof.jpeg"),
      title: "Fatima",
      subtitle: "@fatima",
    },
    {
      key: "5",
      photo: require("../../assets/prof.jpeg"),
      title: "Ayesha",
      subtitle: "@ayesha",
    },
    {
      key: "4",
      photo: require("../../assets/prof.jpeg"),
      title: "Fatima",
      subtitle: "@fatima",
    },
    {
      key: "5",
      photo: require("../../assets/prof.jpeg"),
      title: "Ayesha",
      subtitle: "@ayesha",
    },
  ];
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: "5%",
            marginTop: 20,
          }}
        >
          <TouchableOpacity onPress={navigation.goBack}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../assets/arrow_back.png")}
            />
          </TouchableOpacity>
          <Text style={{ color: theme.colors.text, fontSize: 25 }}>
            Followers (1000+)
          </Text>
          <Text></Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 2,
            marginTop: 20,
            backgroundColor: "#e3e1e3",
          }}
        ></View>
      </View>
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={styles.followersList}>
          {FollowData.map((element, index) => {
            return (
              <View key={index}>
                <View style={styles.data}>
                  <View style={styles.ImgnText}>
                    {element.id}
                    <Image style={styles.dataImage} source={element.photo} />
                    <Text style={styles.dataText}>{element.title}</Text>
                  </View>
                  <Pressable
                    style={{
                      justifyContent: "center",
                      padding: 12,
                      backgroundColor: theme.colors.secondary,
                      borderRadius: 10,
                    }}
                  >
                    <Text>Follow</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: 2,
                    backgroundColor: "#e3e1e3",
                    marginVertical: 10,
                  }}
                ></View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "10%",
  },
  followersList: {
    padding: 10,
  },

  data: {
    margin: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  ImgnText: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-evenly",
    alignItems: "center",
    justifyContent: "center",
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
