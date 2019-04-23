import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Link} from "react-router-native";
import PropTypes from "prop-types";

function BackButton({color}) {
    const {container, buttonContainer, arrow} = styles;
    const arrowStyle = {...arrow, ...{"color": color}};
    return(
        <View style={container}>
            <Link to="/" style={buttonContainer}>
                <Text style={arrowStyle}>{"<"}</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        left: 20,
        position:"absolute",
        top: 30,

    },
    buttonContainer: {
        alignItems: "center",
        flex: 1,
        padding: 10
    },
    arrow: {
        fontSize: 40,
    }
});

BackButton.propTypes = {
    color: PropTypes.string
};

BackButton.defaultProps = {
    color: "#000",
};

export { BackButton };