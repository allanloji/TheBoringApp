import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Link} from "react-router-native";

function NavBar() {
    const {nav, navItem} = styles;
    return(
        <View style={nav}>
            <Link to="/" underlayColor="#f0f4f7" style={navItem}>
                <Text>Activity</Text>
            </Link>
            <Link to="/favorites" underlayColor="#f0f4f7" style={navItem}>
                <Text>Favorites</Text>
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
        alignItems: "center",
        flex: 1,
        padding: 10
    },
});

export { NavBar };