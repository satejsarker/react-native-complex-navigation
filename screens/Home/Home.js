import React, { Component } from 'react'
import { Text, View,StyleSheet,StatusBar,Button } from 'react-native'

 class Home extends Component {
     //it can be modified by custom componet and parms value 
     static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
    
        return {
          title: params ? params.otherParam : 'Home Screen',
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
  render() {
    return (
      <View style={styles.container}>
      <StatusBar  backgroundColor="green" barStyle='dark-content'/>
     
        <Text style={styles.txt}  > Home Screen  </Text>
        <Button title="Home "/>
      </View>
    )
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

export default Home;
