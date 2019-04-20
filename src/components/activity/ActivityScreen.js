import React, { Component } from 'react';
import {Dimensions, Text, View,} from 'react-native';
import {Button} from "./common";

// The screen's width
const {width, height} = Dimensions.get('window');

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
        this.setRandomColor= this.setRandomColor.bind(this);
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

    render(){
        const {view, activity} = styles;
        return(
            <View style={{...view, ...{"backgroundColor": colors[this.state.color].backgroundColor}}}>
                <Text style={{...activity, ...{"color": colors[this.state.color].color}}}>
                    The force is strong with this one.
                </Text>
                <Button color={colors[this.state.color].color} onPress={this.setRandomColor}/>
            </View>


        );
    }
}

const styles = {
    view: {
        height: height - 100,
        justifyContent: "center",
        flexDirection: 'column',
        borderRadius: 20,

    },
    activity: {
        fontSize: 50,
        fontWeight: "600",
        padding: 20,
        textAlignVertical: "center",
    },


};

export default ActivityScreen;
