import React, { Component } from 'react'
import { Text, View,StyleSheet,Button } from 'react-native'

 class Music extends Component {
      static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
    
        return {
          title: params ? params.otherParam : 'Music',
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
        <Text style={styles.txt}> Music </Text>
        <Button title="other page" onPress={()=>{
          this.props.navigation.push('Other')
        }} />
       
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
export default Music;
