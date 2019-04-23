import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import PropTypes from "prop-types";

function Favorite({activity, color, onPress}) {
    const {container, text, deleteContainer, deleteIcon} = styles;
    const containerStyle = {...container, ...{"borderColor": color}};
    const textStyle = {...text, ...{"color": color}};
    const deleteContainerStyle = {...deleteContainer, ...{"borderColor": color}};
    const deleteIconStyle = {...deleteIcon, ...{"color": color}};

    return (
        <View style={containerStyle}>
            <TouchableOpacity onPress={onPress} style={deleteContainerStyle}>
                <Text style={deleteIconStyle}>X</Text>
            </TouchableOpacity>
            <Text style={textStyle}>{activity.activity}</Text>
        </View>
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
    deleteContainer:{
        alignItems: "center",
        borderColor: "#000",
        borderRadius: 15,
        borderWidth: 2,
        height: 30,
        justifyContent: "center",
        position: "absolute",
        right: 0,
        top: 0,
        width: 30
    },
    deleteIcon: {
        color: "#000",
        fontSize: 15,
    }
});

Favorite.propTypes = {
    onPress: PropTypes.func,
    color: PropTypes.string,
    activity: PropTypes.object
};

Favorite.defaultProps = {
    onPress: () => console.log("onPress"),
    color: "#000",
    activity: {}
};

export { Favorite };