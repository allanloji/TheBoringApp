import React from 'react';
import {Picker, StyleSheet} from 'react-native';
import Slider from "@react-native-community/slider";

function Type({color, input: { onChange, value }}) {
    const {picker} = styles;
    const item = { "color": color};
    return (
        <Picker
            itemStyle={item}
            selectedValue={value}
            mode="dropdown"
            style={picker}
            onValueChange={onChange}
            >
            <Picker.Item label="Education" value="education" />
            <Picker.Item label="Recreational" value="recreational" />
            <Picker.Item label="Social" value="social" />
            <Picker.Item label="DIY" value="diy" />
            <Picker.Item label="Charity" value="charity" />
            <Picker.Item label="Cooking" value="cooking" />
            <Picker.Item label="Relaxation" value="relaxation" />
            <Picker.Item label="Music" value="music" />
            <Picker.Item label="Busywork" value="busywork" />
        </Picker>
    );
}

const styles = StyleSheet.create({
    picker: {
        alignSelf: "center",
        width: 150
    },
});

export {Type};