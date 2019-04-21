import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Link} from "react-router-native";

function BackButton({color}) {
    const {container, buttonContainer, arrow} = styles;
    return(
        <View style={container}>
            <Link to="/" style={buttonContainer}>
                <Text style={{...arrow, ...{"color": color}}}>{"<"}</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        top: 30,
        left: 20,
        position:"absolute",
    },
    buttonContainer: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    arrow: {
        fontSize: 40,
    }

});

export { BackButton };