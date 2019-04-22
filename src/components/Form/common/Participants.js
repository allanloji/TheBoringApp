import React from 'react';
import {StyleSheet, Platform, TextInput} from 'react-native';

function Participants({color, input: { onChange, ...restInput }}) {
    const {textField} = styles;
    return (
        <TextInput
            keyboardType={"numeric"}
            onChangeText={onChange}
            returnKeyType={(Platform.OS === 'ios') ? 'done' : 'next'}
            {...restInput}
            style={{...textField, ...{"color":color, "borderColor": color}}}
        />
    );
}

const styles = StyleSheet.create({
    textField: {
        borderColor: "#000",
        borderRadius: 20,
        borderWidth: 1,
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 20
    },
});

export {Participants};