import React from 'react'
import { View, Text, StyleSheet,TextInput, TouchableOpacity, LayoutAnimation, StatusBar, Image} from 'react-native'
import * as firebase from 'firebase'



export default class LoginScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
           headerShown: null
        }
     }
    state = {
         email : "",
         password : "",
         errorMessage : null
    };
    handlelogin = () => {
        const { email, password } = this.state
        firebase.auth().signInWithEmailAndPassword(email,password).catch(error => this.setState({errorMessage:error.message}))
    }
    
    render(){
        return(
            <View style={style.container}>
            <StatusBar barStyle="light-content"></StatusBar>
            

            <View style={style.loginForom}>
            <Image source={require("../assets/cashub-logo-green.png")} 
            style={style.logo}></Image>
              
               <View style={style.errorMessage}>
                {this.state.errorMessage && <Text style={style.error} > {this.state.errorMessage} </Text> }
                </View>
                <View style={style.form}>

                    <View> 
                        <Text style={style.inputTittle}>Email Address</Text>
                        <TextInput style={style.input} autoCapitalize="none" 
                        onChangeText={email => this.setState({email})}
                        value={this.state.email} /> 
                    </View>
                    <View style={{marginTop: 32}}> 
                        <Text style={style.inputTittle}>Password</Text>
                        <TextInput style={style.input} autoCapitalize="none" secureTextEntry
                          onChangeText={password => this.setState({password})}
                          value={this.state.password} />  
                    </View>

                </View>

                <TouchableOpacity style={style.button} onPress={this.handlelogin} >
                    <Text style={{color: "#FFF", fontWeight: "500"}} > Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={style.button}
                onPress = {() => this.props.navigation.navigate("Register")}>
                    <Text style={{color: "#FFF", fontWeight: "500"}}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                </View>
            </View>

           
        );
    }

}

const style = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : "#fff"
       
        
    },
    loginForom :{
 
        top :300
    },
    loginbg:{
        position : "absolute",
        top : 0

    },
    greeting : {
        marginTop : 32,
        fontSize : 18,
        fontWeight : "400",
        textAlign : "center"
    },
    errorMessage : {
        height :72,
        alignItems : "center",
        justifyContent : "center",
        marginHorizontal : 30
    },
    form:{
        marginBottom : 48,
        marginHorizontal: 30
    },
    input : {
        height : 40,
        borderBottomColor : "#8A8F9E",
        borderBottomWidth :  StyleSheet.hairlineWidth,
        fontSize: 15,
        color : "#161F3D"

    },
    inputTittle : {
        color : "#8A8F9E",
        fontSize : 10,
        textTransform : "uppercase"
       
    },
    button : {
        marginTop : 10,
        marginHorizontal : 30,
        backgroundColor : "#0BB3BE",
        borderRadius :4,
        height : 52,
        alignItems : "center",
        justifyContent : "center"

    },
    logo:{
        // position : "absolute",
        width : 172,
        height: 49,
        top :25,
        alignSelf:"center"

    },
    error : {
        color : "#CD6155",
        fontSize : 13,
        fontWeight : "600",
        textAlign : "center"
    }

   
});