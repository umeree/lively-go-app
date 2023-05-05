import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../Theme/Theme";

export default function PaymentSceen({navigation}){
    return (
        <Background>
        <BackButton />
        <Header>Pay Invoice</Header>
        <TextInput
          label="Name on card"
          returnKeyType="next"
        //   value={firstName.value}
          onChangeText={(text) => setFirstName({ value: text, error: "" })}
        //   error={!!firstName.error}
        //   errorText={firstName.error}
        />
        <TextInput
          label="Card Number"
          returnKeyType="next"
        //   value={lastName.value}
          onChangeText={(text) => setLastName({ value: text, error: "" })}
        //   error={!!lastName.error}
        //   errorText={lastName.error}
        />
        <View style = {{display: 'flex', flexDirection: 'row'}}>
        <TextInput
          label="Expiry Date"
          returnKeyType="next"
        //   value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
        //   error={!!email.error}
        //   errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="CVV"
          returnKeyType="done"
        //   value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
        //   error={!!password.error}
        //   errorText={password.error}
          secureTextEntry
        />
        </View>
        <Button
          mode="contained"
        //   onPress={onSignUpPressed}
          style={{ marginTop: 24 }}
        >
          Sign Up
        </Button>
        <View style={styles.row}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </Background>
    )
}
const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      marginTop: 4,
    },
    link: {
      fontWeight: "bold",
      color: theme.colors.primary,
    },
  });
  