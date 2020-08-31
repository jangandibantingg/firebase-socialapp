import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';




export default class HomeScreen extends React.Component {
//     state = {
//         email : "",
//         displayName : ""
//    }

//    componentDidMount(){
//        const {email,displayName} = firebase.auth().currentUser

//        this.setState({email,displayName});
//    }

//    signOutuser = () => {
//        firebase.auth().signOut();
//    };

    render(){
        return(
            <View style={style.container}>
                <View style={style.header}>

                        <Text style={style.headerTitle}> Feed </Text>
                </View>
            
            </View>
        );
    }
 
}

const style = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : "#EFECF4"
        
    },
    header : {
        paddingTop : 64,
        paddingBottom : 16,
        backgroundColor : "#fff",
        alignItems :  "center",
        borderBottomWidth : 1,
        borderBottomColor : "#ebecf4",
        shadowOffset : {height : 5},
        shadowOpacity: 0.2,
        zIndex : 10
    }
});