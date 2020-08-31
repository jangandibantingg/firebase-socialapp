import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as firebase from 'firebase'


export default class HomeScreen extends React.Component {
    state = {
        email : "",
        displayName : ""
   }

   componentDidMount(){
       const {email,displayName} = firebase.auth().currentUser

       this.setState({email,displayName});
   }

   signOutuser = () => {
       firebase.auth().signOut();
   };

    render(){
        return(
            <View style={style.container}>
                <Text>hy update terbaru{this.state.email} </Text>

                <TouchableOpacity style={{marginTop:32}} onPress={this.signOutuser}>
                    <Text> <Ionicons name='ios-home' size={12} /> Log Out!!!</Text>
                </TouchableOpacity>
            
            
            </View>
        );
    }

}

const style = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
});