import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

function Participants({participants, color}) {
    const {container, value, text} = styles;
    return (
        <View style={container}>
            <Text style={{...value, ...{"color": color}}}>{participants}</Text>
            <Text style={{...text, ...{"color": color}}}>Participants</Text>
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

export { Participants };