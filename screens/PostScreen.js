import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default class PostScreen extends React.Component {
    render (){
        return (
            <View style={style.container}>
                <Text>Post Screen</Text>
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