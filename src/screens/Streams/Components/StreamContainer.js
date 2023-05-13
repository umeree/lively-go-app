import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { theme } from "../../../Theme/Theme";
import { GetAllStreams } from "../../../../client/requests";

export default function StreamContainer() {
  const [users, setUsers]  = useState([])

  useEffect(()=>{
    GetAllStreams().then((res)=>{
      console.log(res)
      if(res){
        setUsers(res.users)
      }
    })
  }, [])

  return <>
  {users.map((element, index) => {
  return (
    <View
    key = {element.id + index}
      style={{
        marginVertical: 10,
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: 110,
              width: 120,
              backgroundColor: theme.colors.primary,
              borderRadius: 10,
              marginRight: 5,
            }}
          ></View>
          <View
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text>{element.name}</Text>
            <Text>{element.description}</Text>
          </View>
        </View>
        <View>
          {/* <Text>{date}</Text> */}
        </View>
      </View>
    </View>
  );})}
  </>
}
