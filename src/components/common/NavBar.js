import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Link} from "react-router-native";

function NavBar() {
    const {nav, navItem} = styles;
    return(
        <View style={nav}>
            <Link to="/" underlayColor="#f0f4f7" style={navItem}>
                <Text>Home</Text>
            </Link>
            <Link to="/details" underlayColor="#f0f4f7" style={navItem}>
                <Text>About</Text>
            </Link>
            <Link to="/topics" underlayColor="#f0f4f7" style={navItem}>
                <Text>Topics</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: "#fff",
        bottom: 0,
        flexDirection: "row",
        paddingBottom: 20,
        position:"absolute",
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },

});

export { NavBar };