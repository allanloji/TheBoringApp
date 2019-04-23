import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from "@react-native-community/slider";
import PropTypes from "prop-types";

function Price({lastValue, color, input: { onChange, value }}) {
    const {slider, labelContainer, label} = styles;
    const labelStyle= {...label, ...{"color": color}};
    if(value === '' && lastValue !== value){
        value = lastValue;
    }
    return (
        <View>
            <View style={labelContainer}>
                <Text style={labelStyle}>Price</Text>
                <Text style={labelStyle}>{value}</Text>
            </View>
            <Slider
                value={value}
                style={slider}
                minimumValue={0}
                maximumValue={5}
                minimumTrackTintColor={color}
                maximumTrackTintColor="#FFF"
                onValueChange={onChange}
                step={1}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    labelContainer: {
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 30,
    },
    label: {
        fontSize: 20,
        marginRight: 20,
    },
    slider: {
        height: 40
    },
});

Price.propTypes = {
    lastValue: PropTypes.number,
    color: PropTypes.string,
    input: PropTypes.object
};

Price.defaultProps = {
    lastValue: 0,
    color: "#000",
    input: {}
};

export {Price};