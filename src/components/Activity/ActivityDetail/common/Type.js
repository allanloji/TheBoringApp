import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import _ from 'lodash';
import PropTypes from "prop-types";

function Type({type, color}) {
    const {container, value, text} = styles;
    const valueStyle = {...value, ...{"color": color}};
    const textStyle = {...text, ...{"color": color}};
    return (
        <View style={container}>
            <Text style={valueStyle}>{_.capitalize(type)}</Text>
            <Text style={textStyle}>Type</Text>
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


Type.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string
};

Type.defaultProps = {
    type: "Education",
    color: "#000",
};

export { Type };