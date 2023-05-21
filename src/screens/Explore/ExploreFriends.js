import React from 'react';
import DashHeader from '../../components/Header/DashHeader';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {RecentFriends} from './Recent';
import {PeopleMayKnow} from './PeopleMayKnow';

const Tab = createMaterialTopTabNavigator();

export const ExploreFriends = ({navigation}) => {
  return (
    <>
      <DashHeader navigation={navigation} />
      <Tab.Navigator>
        <Tab.Screen name="Streams" component={RecentFriends} />
        <Tab.Screen name="Friends" component={PeopleMayKnow} />
      </Tab.Navigator>
    </>
  );
};
