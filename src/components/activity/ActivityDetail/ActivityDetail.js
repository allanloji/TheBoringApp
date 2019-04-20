import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {Button} from "../common";
import {Price} from "./common/Price";

const detail = {
    activity: "Learn Express.js",
    accessibility: 0.25,
    type: "education",
    participants: 1,
    price: 0.1,
    "link": "https://expressjs.com/",
    key: "3943506"
};

function ActivityDetail({color}) {
    const {view, activity} = styles;
    return(
        <View style={view}>
            <Text style={activity}>
                The force is strong with this one.
            </Text>
            <Price price={detail.price} />

        </View>
    );
}

const styles = StyleSheet.create({
    view: {
       flex: 1,
        justifyContent: "center",

    },
    activity: {
        fontSize: 50,
        fontWeight: "600",
        padding: 20,
        textAlignVertical: "center",
    },
});

export { ActivityDetail };