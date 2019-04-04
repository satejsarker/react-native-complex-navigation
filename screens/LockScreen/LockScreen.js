import React, { Component } from 'react'
import { Text, View ,Button,StyleSheet} from 'react-native'

 class LockScreen extends Component {
    static navigationOptions={
        header:null
    }
  render() {
    return (
        
        <View style={styles.container}>
        <Text> Lock Screen </Text>
        <Button margin="10" style={styles.button} title="Login " color="orange" onPress={()=>{ this.props.navigation.navigate('DashBord')}}></Button>
       
        <Button title="Sign Up" color="blue" onPress={()=>{ this.props.navigation.navigate('SignupScreen',{
            otherParam: 'SignUp Page',
        })}}></Button>
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
      },
      button:{
          margin:"10"
      }
})

export default LockScreen;
