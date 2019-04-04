import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

 class Music extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}> Music </Text>
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
