import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

 class SignupScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
   
      title: params ? params.otherParam : 'Sign up page ',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor || '#00',
        
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
    };
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> SignupScreen </Text>
      </View>
    );
  }
}


const styles=StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     
      backgroundColor: '#F5FCFF',
    },
    txt:{
        textAlign:"center",
        fontSize: 15,
        color:"red"
    }
})
export default SignupScreen;
