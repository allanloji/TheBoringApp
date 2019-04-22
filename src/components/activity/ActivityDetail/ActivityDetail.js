import React, { Component } from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Accesibility, Participants, Price, Type} from "./common";
import {BackButton} from "../../common";


const detail = {
    activity: "Learn Express.js",
    accessibility: 0.25,
    type: "education",
    participants: 1,
    price: 0.1,
    "link": "https://expressjs.com/",
    key: "3943506"
};

class ActivityDetail extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        const {view, container, activity, priceContainer, infoContainer} = styles;
        console.log(this.props);
        return(
            <View style={{...view,...{"backgroundColor":this.props.activity.color.backgroundColor}}}>
                <BackButton color={this.props.activity.color.color} />
                <View style={container}>
                    <Text style={{...activity, ...{"color":this.props.activity.color.color}}}>
                        {this.props.activity.activity}
                    </Text>
                    <View style={priceContainer}><Price price={this.props.activity.price} color={this.props.activity.color.color}/></View>
                    <View style={infoContainer}>
                        <Accesibility accesibility={this.props.activity.accessibility} color={this.props.activity.color.color}/>
                        <Type type={this.props.activity.type} color={this.props.activity.color.color}/>
                        <Participants participants={this.props.activity.participants} color={this.props.activity.color.color}/>
                    </View>
                </View>
            </View>
        );
    }

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

export default ActivityDetail;