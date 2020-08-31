import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import Contants from "expo-constants"
import * as Permission from "expo-permissions"
import Fire from "../Fire"
import * as ImagePicker from 'expo-image-picker'


const firebase = require('firebase');
require('firebase/firestore');

export default class PostScreen extends React.Component {
    state = {
        text : "",
        image : null
    }
 
    componentDidMount(){
        this.getPhotoPermission();
    }
    getPhotoPermission = async () => {
        if (Contants.platform.ios) {
            const { status }  = await Permission.askAsync(Permission.CAMERA_ROLL);
            if(status !== "granted") {
                alert (" we need permission to acceess your camera roll ");
            } 
        }
    };

    handlePost = () => {
        Fire.shared
                    .addPost({ text: this.state.text.trim(), localUri: this.state.image })
                    .then(ref=> {
                    this.setState({text: "", image: null });
                    this.props.navigation.goback();
        })
        .catch(error => {
           console.log(error);
        });
    };

    pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync ({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect : [4,3]
      })
      if (!result.cancelled) {
          this.setState({ image:result.uri })
      }  
    }

    render (){
        return (
            <SafeAreaView style={style.container}>
                <View style={style.header}>
               <TouchableOpacity onPress={() => this.props.navigation.goback()}>
                   <Ionicons name="md-arrow-back" size={24} color="#d8d9db" ></Ionicons>
               </TouchableOpacity>
          
               <TouchableOpacity onPress={this.handlePost}>
                   <Text style={{ fontWeight:"500" }} >Post</Text>
               </TouchableOpacity>
               </View>

               <View style={style.inputContainer}>
               
                   <Image source={require( "../assets/bg.png") } style={style.avatar} />
                   <TextInput
                    autoFocus={true}
                    multiline={true} 
                    numberOfLines={4} 
                    style={{ flex:1 }} 
                    placeholder="want to share something"
                    onChangeText={ text => this.setState({text}) }
                    value={this.state.text}></TextInput>
            
            </View>

            <TouchableOpacity style={style.photo} onPress={this.pickImage}>
                <Ionicons name="md-camera" size={32} color="#d8d9db" />
            </TouchableOpacity>

            <View style={{ marginHorizontal:32, marginTop:32, height: "100%"}}>
                <Image source={{ uri: this.state.image}} style={{ width:"100%", height:"100%"}}></Image>
            </View>

            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    container : {
        flex : 1 
    },
    header : {
        flexDirection : "row",
        justifyContent : "space-between",
        paddingHorizontal : 32,
        paddingVertical: 12,
        borderBottomWidth : 1,
        borderBottomColor : "#d8d9db"
    },
    inputContainer : {
      margin : 32,
      flexDirection : "row"  
    },
    avatar : {
        width : 48,
        height : 48,
        borderRadius : 24,
        marginRight : 16
    },
    photo : {
        alignItems : "flex-end",
        marginHorizontal : 32,

    }
});