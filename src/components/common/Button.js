import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from "prop-types";

function Button({onPress, color, children}) {
    const {container, text} = styles;
    const containerStyle = {...container, ...{"borderColor": color}};
    const textStyle = {...text, ...{"color": color}};
    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        alignSelf: "center",
        borderColor: "#000",
        borderRadius: 50,
        borderWidth: 1,
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 50,
    },
    text:{
        color: "#000",
        fontSize: 15,
    }
});

Button.propTypes = {
    onPress: PropTypes.func,
    color: PropTypes.string,
    children: PropTypes.string
};

Button.defaultProps = {
    onPress: () => console.log("onPress"),
    color: "#000",
    children: ""
};

export { Button };