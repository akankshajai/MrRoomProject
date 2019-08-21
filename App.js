/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator,
  DrawerActions,
} from 'react-navigation';

import Home from './components/Home';
import Profile from './components/Profile';
import Search from './components/Search';
import Manager from './components/Manager';
import Notification from './components/Notification';
import Drawer from './components/Drawer';

const HomeStack = createStackNavigator({
  Home: Home,
  Notification: Notification,
});
const ProfileStack = createStackNavigator({
  Profile: Profile,
  Home: Home,
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: Search,
    Profile: ProfileStack,
    Manager: Manager,
    Notification: Notification,
  },
  {
    tabBarOptions: {
      activeTintColor: '#ffffff',
      inactiveTintColor: '#ffffff',
      style: {
        backgroundColor: '#f20404',
      },
      indicatorStyle: {
        backgroundColor: '#ffffff',
      },
    },
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: Drawer,
    drawerWidth: 300,
  },
);

const App = createAppContainer(DrawerNavigator);

export default App;
