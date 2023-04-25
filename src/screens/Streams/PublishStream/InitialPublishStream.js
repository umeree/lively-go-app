import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { theme } from "../../../Theme/Theme";
import ScreenHeader from "../../../components/Header/ScreenHeader";
import Header from "../../../components/Header";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";

export default function InitialPublishStream({ navigation }) {
  const [channeName, setChannelName] = useState({
    value: "",
    error: "",
  });
  const [channeDesc, setChanneDesc] = useState({
    value: "",
    error: "",
  });

  function onCreateStream() {
    console.log("Create Stream!");
    navigation.navigate("HostStreamScreen");
  }
  return (
    <>
      <ScreenHeader navigation={navigation} title="Create Stream" />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: "5%",
          marginTop: 55,
        }}
      >
        <Header>Please fill in the channel name</Header>
        <TextInput
          label="Channel Name"
          returnKeyType="next"
          value={channeName.value}
          onChangeText={(text) => setChannelName({ value: text, error: "" })}
          error={!!channeName.error}
          errorText={channeName.error}
          autoCapitalize="none"
          autoCompleteType="name"
          textContentType="name"
        />
        <TextInput
          label="Channel Description"
          returnKeyType="next"
          value={channeDesc.value}
          onChangeText={(text) => setChanneDesc({ value: text, error: "" })}
          error={!!channeDesc.error}
          errorText={channeDesc.error}
          autoCapitalize="none"
          autoCompleteType="name"
          textContentType="name"
        />
        <Button mode="outlined" onPress={onCreateStream}>
          Create Stream Channel
        </Button>
      </View>
    </>
  );
}
