import React from "react";
import DashHeader from "../../components/Header/DashHeader";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { RecentFriends } from "./Recent";
import { PeopleMayKnow } from "./PeopleMayKnow";

const Tab = createMaterialTopTabNavigator();

export const ExploreFriends = ({ navigation }) => {
  return (
    <>
      <DashHeader />
      <Tab.Navigator>
        <Tab.Screen name="Recent" component={RecentFriends} />
        <Tab.Screen name="You May Know" component={PeopleMayKnow} />
      </Tab.Navigator>
    </>
  );
};
