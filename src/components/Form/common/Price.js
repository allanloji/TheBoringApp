import React from 'react';
import {StyleSheet, View} from 'react-native';
import Slider from "@react-native-community/slider";

function Price({color, input: { onChange }}) {
    const {slider} = styles;
    return (
        <Slider
            style={slider}
            minimumValue={0}
            maximumValue={5}
            minimumTrackTintColor={color}
            maximumTrackTintColor="#FFF"
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

export {Price};