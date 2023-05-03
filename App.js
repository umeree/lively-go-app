import {Provider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconsA from 'react-native-vector-icons/AntDesign';
import IconsFA from 'react-native-vector-icons/FontAwesome5';
import {theme} from './src/Theme/Theme';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  Dashboard,
  FriendScreen,
} from './src/screens';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import Toast from 'react-native-toast-message';
import SplashScreen from './src/screens/SplashScreen';
import Followers from './src/screens/Profile/Followers';
import Following from './src/screens/Profile/Following';
import UserProfile from './src/screens/UserProfile';
import {UserDataContextProvider} from './context/UserInfoContext';
import {ExploreFriends} from './src/screens/Explore/ExploreFriends';
import InitialPublishStream from './src/screens/Streams/PublishStream/InitialPublishStream';
import AllStreams from './src/screens/Streams/AllStreams';
import HostStreamScreen from './src/screens/Streams/Host/HostStreamScreen';
import PaymentSceen from './src/screens/PaymentScreen';

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor="black"
      inactiveColor="black"
      barStyle={{backgroundColor: theme.colors.primary}}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="FindFriendsScreen"
        component={ExploreFriends}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="FriendScreen"
        component={FriendScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <IconsA name="search1" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProflieScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <IconsFA name="user-friends" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <UserDataContextProvider>
        <Provider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="SplashScreen"
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="PaymentScreen" component={PaymentSceen} />
              <Stack.Screen name="Tabs" component={MyTabs} />
              <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
              <Stack.Screen name="FollowersScreen" component={Followers} />
              <Stack.Screen name="FollowingScreen" component={Following} />
              <Stack.Screen name="UserProfileScreen" component={UserProfile} />
              <Stack.Screen
                name="InitialPublishStreamScreen"
                component={InitialPublishStream}
              />
              <Stack.Screen name="AllStreamsScreen" component={AllStreams} />
              <Stack.Screen
                name="HostStreamScreen"
                component={HostStreamScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
        <Toast />
      </UserDataContextProvider>
    </>
  );
}
