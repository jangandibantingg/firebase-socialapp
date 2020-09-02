import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import * as firebase from 'firebase'
import { BottomTabBar } from 'react-navigation-tabs';

export default class LoadinScreen extends React.Component {
  
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        });
    }

    render(){
        return(
            <View style={styles.container}>
                  <Image source={require("../assets/cashub-logo.png")} style={{ width : 162, height: 39}} ></Image>
                  <Image source={require("../assets/New-shape.png")} style={styles.newshape}></Image>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : "#0BB3BE"
    },
    newshape : {
        width : 659.23,
        height : 396.89,
        // justifyContent: "center",
        top : 500,
        position : "absolute"
    }

});