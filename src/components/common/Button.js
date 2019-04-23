import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function Button({onPress, color, children}) {
    const {container, text} = styles;
    const textStyle = {...text, ...{"color": color}};
    return (
        <TouchableOpacity onPress={onPress} style={{...container, ...{"borderColor": color}}}>
            <Text style={textStyle}>{children}</Text>
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
    },
    text:{
        color: "#000",
        fontSize: 15,
    }
});

export { Button };