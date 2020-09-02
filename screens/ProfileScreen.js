import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase'


export default class ProfileScreen extends React.Component {
    signOutUser = () => {
        firebase.auth().signOut();
    }
    render (){
        return (
            <View style={style.container}>
               
                <TouchableOpacity style = { style.button} 
                onPress={this.signOutUser} > 
                <Text style={{color : "#fff",  fontSize : 13 }}>Log Out</Text>
                </TouchableOpacity>

            </View>
        )
    }
}


const style = StyleSheet.create({
    container : {
        flex : 1,
        alignItems :  "center",
        justifyContent : "center"
    },
    button:{
        marginHorizontal : 30,
        backgroundColor : "#0BB3BE",
        borderRadius :4,
        height : 52,
        width : 100,
        alignItems : "center",
        justifyContent : "center"
    }
});