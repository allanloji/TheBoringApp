import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import PropTypes from "prop-types";

function Participants({participants, color}) {
    const {container, value, text} = styles;
    const valueStyle =  {...value, ...{"color": color}};
    const textStyle =  {...text, ...{"color": color}};
    return (
        <View style={container}>
            <Text style={valueStyle}>{participants}</Text>
            <Text style={textStyle}>Participants</Text>
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

Participants.propTypes = {
    participants: PropTypes.number,
    color: PropTypes.string
};

Participants.defaultProps = {
    participants: 1,
    color: "#000",
};

export { Participants };