import React from 'react';
import { StyleSheet, Text,  TouchableOpacity } from 'react-native';
import colors from '../config/colors';

export default function AppButton({ title, onPress, color = "primary" }) {
    return (
        <TouchableOpacity style={[styles.btn, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.btnTxt}>{title}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    btn: {
        width:"100%",
        marginVertical: 10,
        backgroundColor: colors.primery,
        borderRadius: 25,
        justifyContent:'center',
        alignItems : 'center',
        padding:10
    },
    btnTxt: {
        color : colors.white,
        fontWeight: '900',
        fontSize:20
    }
})
