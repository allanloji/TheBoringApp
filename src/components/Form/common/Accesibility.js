import React from 'react';
import {StyleSheet} from 'react-native';
import Slider from "@react-native-community/slider";

function Accesibility({color, input: { onChange }}) {
    const {slider} = styles;
    return (
        <Slider
            style={slider}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor={color}
            maximumTrackTintColor="#fff"
            onValueChange={onChange}
            step={1}
        />
    );
}

const styles = StyleSheet.create({
    slider: {
        height: 40
    },
});

export {Accesibility};