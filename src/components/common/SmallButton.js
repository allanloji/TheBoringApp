import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from "prop-types";

function SmallButton({onPress, color, children}) {
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
        borderColor: "#000",
        borderRadius: 50,
        borderWidth: 1,
        height: 30,
        justifyContent: "center",
        paddingHorizontal: 20,
        width: 100
    },
    text:{
        color: "#000",
        fontSize: 12,
    }
});

SmallButton.propTypes = {
    onPress: PropTypes.func,
    color: PropTypes.string,
    children: PropTypes.string
};

SmallButton.defaultProps = {
    onPress: () => console.log("onPress"),
    color: "#000",
    children: ""
};


export { SmallButton };