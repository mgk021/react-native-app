import React from 'react';
import { StyleSheet, ImageBackground, View , Text, Image } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';



export default function AppScreen() {
    return (
        <ImageBackground style={styles.image} source={require("../assets/bgn.jpg")}>
            <View style={styles.logo}>
                <Image style={styles.img} source={require("../assets/logo.png")}/>
                <Text style={styles.txt}>BEHASUN</Text>
            </View>

            <View style={styles.btns}>
                <AppButton title="login" onPress={() => console.log("login")} />
                <AppButton title="register" onPress={() => console.log("register")} color="secondry" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    btns:{
        position:'absolute',
        bottom:0,
        width:'100%',
        padding:10,
    },
    logo:{
        position:'absolute',
        top:20,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    txt:{
        color:colors.white,
        fontSize:25,
        fontWeight:'900'
    },
    img:{
        width:100,
        height:100
    }
})