/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import Home from './screens/Home/Home';
import LockScreen from './screens/LockScreen/LockScreen';
import SignupScreen from './screens/SignupSreen/SignupScreen';
import DashBord from './screens/DashBord/DashBord';
import Music from './screens/Music/Music';
import { Icon } from 'react-native-elements'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  render() {
    return <AppContainer />

  }
};
const bottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home
  },
  Music: Music,
  Signup :{
    screen:SignupScreen,
    otherParam:"satej"
  }
}, {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 15,
      },
      style: {
        backgroundColor: 'white',
      },
    },
    defaultNavigationOptions: {

      headerStyle: {

      }
    },
    navigationOptions:({navigation})=> {

    const {routeName}=navigation.state.routes[navigation.state.index];
    return {
      headerTitle:routeName,
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
    }
    }

  }


);
const DashbordStackNavigation=createStackNavigator({
  dashbordStack:bottomTabNavigator
},{
   defaultNavigationOptions:({navigation})=>{
     return{
       headerLeft:(

        <Icon
        iconStyle={{padding:10}}
        onPress={()=>navigation.openDrawer()}
  name='menu'
  color='#00aced' />
       )
     }
   }
})

const drawerNavigator = createDrawerNavigator({
  DashBord: DashbordStackNavigation
});



const switchNavigation = createSwitchNavigator({

  DashBord: {
    screen: drawerNavigator
  },
  LockScreen: LockScreen,
  SignupScreen: SignupScreen
}, {
    initialRouteName: 'LockScreen',
    defaultNavigationOptions: {

      headerStyle: {

      }
    }

  });
const AppStackNavigation = createStackNavigator({
  Home: {
    screen: Home
  },
  LockScreen: LockScreen,
  SignupScreen: SignupScreen
}, {
    initialRouteName: 'LockScreen',
    defaultNavigationOptions: {

      headerStyle: {

      }
    }
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const AppContainer = createAppContainer(switchNavigation);
export default App;