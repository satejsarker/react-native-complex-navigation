import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

 class DashBord extends Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
    
        return {
          title: params ? params.otherParam : 'DashBord',
          /* These values are used instead of the shared configuration! */
         
          headerTitleStyle: { 
            textAlign:"center", 
            flex:1 
        },
        };
      };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}> DashBord </Text>
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

export default DashBord;

