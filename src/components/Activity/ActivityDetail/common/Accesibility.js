import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import PropTypes from "prop-types";

function Accesibility({accesibility, color}) {
    return (
        <View>
            {calculateAccesibility(accesibility, color)}
        </View>
    );
}

function calculateAccesibility(accesibility, color){
    const {container, value, text} = styles;
    const valueStyle =  {...value, ...{"color": color}};
    const textStyle =  {...text, ...{"color": color}};
    const valueCont = -(Math.ceil(accesibility * 10)) +  10;

    return(
        <View style={container}>
            <Text style={valueStyle}>{valueCont + "/10"}</Text>
            <Text style={textStyle}>Accesibility</Text>
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

Accesibility.propTypes = {
    accesibility: PropTypes.number,
    color: PropTypes.string
};

Accesibility.defaultProps = {
    accesibility: 10,
    color: "#000",
};

export { Accesibility };