import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { clearLocalStorageSession } from "../../../client/requests";
import Toast from "react-native-toast-message";
import { theme } from "../../Theme/Theme";

const ProfileScreen = ({ navigation }) => {
  const followers = 1000;
  const followings = 3456;

  const showSuccessToast = () => {
    Toast.show({
      type: "success",
      text1: "Authentication",
      text2: "Sucessfully logged out!",
    });
  };

  function onLogout() {
    clearLocalStorageSession().then((res) => {
      showSuccessToast();
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginScreen" }],
      });
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.profPart}>
        <Text style={styles.upText}>Mobile Patterns</Text>
      </View>
      <View style={styles.spaceSection}></View>
      <View style={styles.counterSection}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text
            onPress={() => navigation.navigate("FollowingScreen")}
            style={{
              fontSize: 20,
              color: theme.colors.primary,
              fontWeight: "bold",
            }}
          >
            Following
          </Text>
          <Text
            onPress={() => navigation.navigate("FollowingScreen")}
            style={{
              fontSize: 20,
              color: theme.colors.primary,
            }}
          >
            {followings}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text
            onPress={() => navigation.navigate("FollowersScreen")}
            style={{
              fontSize: 20,
              color: theme.colors.primary,
              fontWeight: "bold",
            }}
          >
            Followers
          </Text>
          <Text
            onPress={() => navigation.navigate("FollowingScreen")}
            style={{
              fontSize: 20,
              color: theme.colors.primary,
              fontWeight: "bold",
            }}
          >
            {followers}
          </Text>
        </View>
        <Text style={styles.text}>Friends</Text>
        <Text style={styles.text}>Broadcast</Text>
      </View>
      <View style={styles.spaceSection}></View>
      <View style={styles.settingStyle}>
        <Text style={styles.text}>Settings</Text>
      </View>
      <View style={styles.space}></View>
      <View style={styles.logoutbtn}>
        <TouchableOpacity onPress={onLogout}>
          <Text
            style={{ fontSize: 20, marginLeft: 10, color: theme.colors.error }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  profPart: {
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.secondary,
  },
  spaceSection: {
    height: "5%",
  },
  counterSection: {
    height: "28%",
    flexDirection: "column",
    backgroundColor: "#FAF9F6",
    justifyContent: "space-evenly",
  },
  settingStyle: {
    justifyContent: "center",
    height: "8%",
    backgroundColor: "#FAF9F6",
  },
  space: {
    height: "5%",
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    color: theme.colors.text,
  },
  upText: {
    fontSize: 20,
  },
  logoutbtn: {
    backgroundColor: "#FAF9F6",
    height: 50,
    justifyContent: "center",
  },
});
export default ProfileScreen;
