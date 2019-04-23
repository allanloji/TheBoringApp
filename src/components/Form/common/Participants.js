import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from "@react-native-community/slider";

function Participants({lastValue,color, input: { onChange, value }}) {
    const { labelContainer,label, slider} = styles;
    const labelStyle= {...label, ...{"color": color}};
    if(value === '' && lastValue !== value){
        value = lastValue;
    }
    return (
        <View>
            <View style={labelContainer}>
                <Text style={labelStyle}>Participants</Text>
                <Text style={labelStyle}>{value}</Text>
            </View>
            <Slider
                value={value}
                style={slider}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor={color}
                maximumTrackTintColor="#fff"
                onValueChange={onChange}
                step={1}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        marginRight: 20,
    },
    labelContainer: {
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 30,
    },
    slider: {
        height: 40
    },
});

export {Participants};