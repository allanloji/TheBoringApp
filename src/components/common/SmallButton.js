import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function SmallButton({onPress, color, children}) {
    const {container, text} = styles;
    return (
        <TouchableOpacity onPress={onPress} style={{...container, ...{"borderColor": color}}}>
            <Text style={{...text, ...{"color": color}}}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderColor: "#000",
        borderRadius: 50,
        borderWidth: 1,
        height: 30,
        justifyContent: "center",
        paddingHorizontal: 20,
        width: 100
    },
    text:{
        fontSize: 12,
        color: "#000"
    }
});

export { SmallButton };