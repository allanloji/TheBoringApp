import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

function Accesibility({accesibility, color}) {
    return (
        <View>
            {calculateAccesibility(accesibility, color)}
        </View>
    );
}

function calculateAccesibility(accesibility, color){
    const {container, value, text} = styles;

    const valueCont = -(Math.ceil(accesibility * 10)) +  10;
    return(
        <View style={container}>
            <Text style={{...value, ...{"color": color}}}>{valueCont + "/10"}</Text>
            <Text style={{...text, ...{"color": color}}}>Accesibility</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    value: {
        color: "#000",
        fontSize: 30,
    },
    text:{
        color: "#000",
        fontSize: 15,
    },

});

export { Accesibility };