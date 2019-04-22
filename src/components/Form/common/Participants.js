import React from 'react';
import {StyleSheet, Platform, TextInput, Text, View} from 'react-native';

function Participants({color, input: { onChange, ...restInput }}) {
    const {textField, title} = styles;
    const titleStyle= {...title, ...{"color": color}};
    return (
        <View>
            <Text style={titleStyle}>Participants</Text>
            <TextInput
                keyboardType={"numeric"}
                onChangeText={onChange}
                returnKeyType={(Platform.OS === 'ios') ? 'done' : 'next'}
                {...restInput}
                style={{...textField, ...{"color":color, "borderColor": color}}}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 30,
    },
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