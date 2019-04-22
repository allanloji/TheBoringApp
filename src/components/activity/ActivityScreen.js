import React, { Component } from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import SwipeGesture from '../../../scripts/swipe-gesture';
import {Button, NavBar, SmallButton} from "../common";


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
        this.state = {color:0 };
        this.setRandomColor = this.setRandomColor.bind(this);
        this.onSwipePerformed = this.onSwipePerformed.bind(this);
        this.onDetailPressed = this.onDetailPressed.bind(this);
        this.onFilterPressed = this.onFilterPressed.bind(this);
    }

    setRandomColor(){
        const color = Math.floor(Math.random() * 10);
        if(color === this.state.color){
            return this.setRandomColor();
        }
        this.setState({
            color: color
        });

    }

    onSwipePerformed(action) {
        if(action === "left"){
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
        return(
            <View style={{...view, ...{"backgroundColor": colors[this.state.color].backgroundColor}}}>
                <View style={filter}>
                    <SmallButton onPress={this.onFilterPressed} color={colors[this.state.color].color}>Filter</SmallButton>
                </View>
                <SwipeGesture gestureStyle={view} onSwipePerformed={this.onSwipePerformed}>
                    <Text style={{...activity, ...{"color": colors[this.state.color].color}}}>
                        The force is strong with this one.
                    </Text>
                    <View style={buttonContainer}>
                        <Button color={colors[this.state.color].color} onPress={this.onDetailPressed}>Details</Button>
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
        top: 150
    },
    filter: {
        position: "absolute",
        top: 50,
        right: 20,
        zIndex: 2
    }


});

export default ActivityScreen;
