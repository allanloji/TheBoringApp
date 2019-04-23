import React from 'react';
import {Picker, Platform, StyleSheet, Text, View} from 'react-native';
import PropTypes from "prop-types";
import {Accesibility} from "./Accesibility";


function Type({lastValue, color, input: { onChange, value }}) {
    const {picker, title} = styles;
    const item = { "color": color};
    const titleStyle= {...title, ...{"color": color}};
    if(value === '' && lastValue !== value){
        value = lastValue;
    }
    return (
        <View>
            <Text style={titleStyle}>Type</Text>
            <Picker
                value={value}
                itemStyle={item}
                selectedValue={value}
                mode="dropdown"
                style={picker}
                onValueChange={onChange}
            >
                <Picker.Item label="Random" value="" />
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
        </View>

    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginTop: 30,
    },
    picker: {
        alignSelf: "center",
        top: Platform.OS === 'ios' ? -100 : 0,
        width: 150
    },
});

Type.propTypes = {
    lastValue: PropTypes.string,
    color: PropTypes.string,
    input: PropTypes.object
};

Type.defaultProps = {
    lastValue: "Education",
    color: "#000",
    input: {}
};

export {Type};