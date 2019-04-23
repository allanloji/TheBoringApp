import React, { Component } from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import SwipeGesture from '../../../scripts/swipe-gesture';
import {Button, NavBar, SmallButton} from "../common";
import PropTypes from "prop-types";

const colors = [
    {
        backgroundColor: "#EDF2F5",
        color: "#D9827E"
    },
    {
        backgroundColor: "#6FBCB7",
        color: "#C0ED8A"
    },
    {
        backgroundColor: "#F7DE87",
        color: "#302B0D"
    },
    {
        backgroundColor: "#FA5331",
        color: "#FBE2EB"
    },
    {
        backgroundColor: "#1A2B44",
        color: "#FADA42"
    },
    {
        backgroundColor: "#FFE5EE",
        color: "#FE4F34"
    },
    {
        backgroundColor: "#478BAC",
        color: "#FF8C61"
    },
    {
        backgroundColor: "#6DB5D0",
        color: "#D86DCA"
    },
    {
        backgroundColor: "#B89046",
        color: "#2B6971"
    },
    {
        backgroundColor: "#674389",
        color: "#CA975B"
    },
];

class ActivityScreen extends Component {
    constructor(props){
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
        this.onSwipePerformed = this.onSwipePerformed.bind(this);
        this.onDetailPressed = this.onDetailPressed.bind(this);
        this.onFilterPressed = this.onFilterPressed.bind(this);
    }

    setRandomColor(){
        const color = colors[Math.floor(Math.random() * 10)];
        if(color === this.props.activity.color){
            return this.setRandomColor();
        }
        this.props.colorChange(color);
    }

    onSwipePerformed(action) {
        if(action === "left"){
            this.props.fetchActivity(this.props.activity.query);
            this.setRandomColor();
        }
    }

    onDetailPressed(){
        this.props.history.push("/details")
    }

    onFilterPressed(){
        this.props.history.push("/form")
    }


    render(){
        const {view, activity, buttonContainer, filter} = styles;
        const viewStyle = {...view, ...{"backgroundColor": this.props.activity.color.backgroundColor}};
        const activityStyle = {...activity, ...{"color": this.props.activity.color.color}};
        return(
            <View style={viewStyle}>
                <View style={filter}>
                    <SmallButton onPress={this.onFilterPressed} color={this.props.activity.color.color}>Filter</SmallButton>
                </View>
                <SwipeGesture gestureStyle={view} onSwipePerformed={this.onSwipePerformed}>
                    <Text style={activityStyle}>
                        {this.props.activity.activity.activity}
                    </Text>
                    <View style={buttonContainer}>
                        <Button color={this.props.activity.color.color} onPress={this.onDetailPressed}>Details</Button>
                    </View>
                </SwipeGesture>
                <NavBar/>
            </View>
        );
    }
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
    buttonContainer: {
        top: 100
    },
    filter: {
        position: "absolute",
        right: 20,
        top: 50,
        zIndex: 2
    }
});

ActivityScreen.propTypes = {
    activity: PropTypes.object,
    fetchActivity: PropTypes.func,
    colorChange: PropTypes.func,
    history: PropTypes.object,
};

ActivityScreen.defaultProps = {
    activity: {
        activity:{
            activity: "Swipe Left to get an Activity.",
            accessibility: 0,
            type: "education",
            participants: 1,
            price: 0,
        },
        color: {
            backgroundColor: "#6FBCB7",
            color: "#C0ED8A",
        },
    },
    fetchActivity:()=> console.log("fetchActivity"),
    colorChange: ()=> console.log("colorChange") ,
    history: {}

};


export default ActivityScreen;
