import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function SmallButton({onPress, color, children}) {
    const {container, text} = styles;
    const containerStyle = {...container, ...{"borderColor": color}};
    const textStyle = {...text, ...{"color": color}};
    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            <Text style={textStyle}>{children}</Text>
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
        color: "#000",
        fontSize: 12,
    }
});

export { SmallButton };