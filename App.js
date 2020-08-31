import React from 'react'
// import { Ionicons } from '@expo/vector-icons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import MessageScreen from './screens/MessageScreen'
import PostScreen from './screens/PostScreen'
import NotificationScreen from './screens/NotificationScreen'
import ProfileScreen from './screens/ProfileScreen'



import * as firebase from 'firebase'
// import { AppState } from 'react-native'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDLaaUtQhElT6Z4bRf6O2A-qoesaGKqaPE",
  authDomain: "bisbul-5e79d.firebaseapp.com",
  databaseURL: "https://bisbul-5e79d.firebaseio.com",
  projectId: "bisbul-5e79d",
  storageBucket: "bisbul-5e79d.appspot.com",
  messagingSenderId: "923607045350",
  appId: "1:923607045350:web:98891996f1088891369727",
  measurementId: "G-3PWJNNGMFD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppTabsNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <Ionicons
                name="ios-home"
                color={tintColor}
                size={24}
            />
        )
    })
},
  Message: {
    screen: MessageScreen,
    navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <Ionicons
                name="ios-chatboxes"
                color={tintColor}
                size={24}
            />
        )
    })
},
  
Post : { 
  screen: PostScreen,
  navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
          <Ionicons
              name="ios-add-circle"
              color="#e9446a"
              size={48}
              style={{
                shadowColor:"#e9446a",
                shadowOffset : {width:0, height:0},
                shadowRadius: 10,
                shadowOpacity : 0.3
                
              }}
          />
      )
  })
},
Notification : {
  screen: NotificationScreen,
  navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
          <Ionicons
              name="ios-notifications"
              color={tintColor}
              size={24}
          />
      )
  })
},
Profile : {
  screen: ProfileScreen,
  navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
          <Ionicons
              name="ios-person"
              color={tintColor}
              size={24}
          />
      )
  })
}


},
{ tabBarOptions : {
  activeTintColor : "#161f3d",
  inactiveTintColor : "#b8bbc4",
  showLabel : false
}}
)

const AuthStack = createStackNavigator({
  Login : LoginScreen,
  Register : RegisterScreen
})


export default createAppContainer(
  createSwitchNavigator(
    {
      Loading : LoadingScreen,
      App  : AppTabsNavigator,
      Auth : AuthStack
    },
    {
      initialRouteName : "Loading"
    }
  )
);