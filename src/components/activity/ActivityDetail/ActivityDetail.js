import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {Accesibility, Participants, Price, Type} from "./common";

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
    const {view, container, activity, priceContainer, infoContainer} = styles;
    return(
        <View style={view}>
            <View style={container}>
                <Text style={activity}>
                    The force is strong with this one.
                </Text>
                <View style={priceContainer}><Price price={detail.price} color={"#D9827E"}/></View>
                <View style={infoContainer}>
                    <Accesibility accesibility={detail.accessibility} color={"#D9827E"}/>
                    <Type type={detail.type} color={"#D9827E"}/>
                    <Participants participants={detail.participants} color={"#D9827E"}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#EDF2F5",
       flex: 1,
        justifyContent: "center",

    },
    container: {
        paddingHorizontal: 20,
    },
    activity: {
        color: "#D9827E",
        fontSize: 50,
        fontWeight: "600",
        textAlignVertical: "center",
    },
    priceContainer: {
        marginTop: 20,
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 30
    }
});

export { ActivityDetail };