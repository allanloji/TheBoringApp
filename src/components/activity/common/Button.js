import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function Button({onPress, color}) {
    const {container, text} = styles;
    return (
        <TouchableOpacity onPress={onPress} style={{...container, ...{"borderColor": color}}}>
            <Text style={{...text, ...{"color": color}}}>Details</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        alignSelf: "center",
        borderColor: "#000",
        borderRadius: 50,
        borderWidth: 1,
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 50,
        top: 200,
    },
    text:{
        fontSize: 15,
        color: "#000"
    }
});

export { Button };