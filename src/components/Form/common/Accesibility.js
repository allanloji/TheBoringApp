import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from "@react-native-community/slider";

function Accesibility({lastValue, color, input: { onChange, value }}) {
    const {slider, label, labelContainer} = styles;
    const labelStyle = {...label,...{"color": color}};
    if(value === '' && lastValue !== value){
        value = lastValue;
    }
    return (
        <View>
            <View style={labelContainer}>
                <Text style={labelStyle}>Accesibility</Text>
                <Text style={labelStyle}>{value}</Text>
            </View>
            <Slider
                value={value}
                style={slider}
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor={color}
                maximumTrackTintColor="#fff"
                onValueChange={onChange}
                step={1}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    slider: {
        height: 40
    },
    labelContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 30,
    },
    label: {
        fontSize: 20,
        marginRight: 20,
    },
});

export {Accesibility};