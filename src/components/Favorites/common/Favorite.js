import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import PropTypes from "prop-types";

function Favorite({activity, onPress, color}) {
    const {container, text} = styles;
    const containerStyle = {...container, ...{"borderColor": color}};
    const textStyle = {...text, ...{"color": color}};

    return (
        <TouchableOpacity style={containerStyle}>
            <Text style={textStyle}>{activity.activity}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderColor: "#000",
        borderRadius: 20,
        borderWidth: 2,
        height: 100,
        justifyContent: "center",
        marginVertical: 10,
        marginHorizontal: 10,
    },
    text:{
        color: "#000",
        fontSize: 20,
    },
});

Favorite.propTypes = {

};

Favorite.defaultProps = {

};

export { Favorite };