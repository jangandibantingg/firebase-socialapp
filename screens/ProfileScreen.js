import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default class ProfileScreen extends React.Component {
    render (){
        return (
            <View style={style.container}>
                <Text>Profile Screen</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        alignItems :  "center",
        justifyContent : "center"
    }
});