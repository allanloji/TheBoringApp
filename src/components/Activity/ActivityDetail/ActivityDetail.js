import React, { Component } from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Accesibility, Participants, Price, Type} from "./common";
import {BackButton, SmallButton} from "../../common";
import PropTypes from "prop-types";



class ActivityDetail extends Component{
    constructor(props) {
        super(props);
        this.addFavorite = this.addFavorite.bind(this);
    }

    addFavorite(){
        this.props.addFavorite(this.props.activity.activity);
    }

    render(){
        const {view, container, activity, priceContainer, infoContainer, favorite} = styles;
        const viewStyle = {...view,...{"backgroundColor":this.props.activity.color.backgroundColor}};
        const activityStyle = {...activity, ...{"color":this.props.activity.color.color}};
        return(
            <View style={viewStyle}>
                <BackButton color={this.props.activity.color.color} />
                <View style={favorite}>
                    <SmallButton color={this.props.activity.color.color} onPress={this.addFavorite}>Add Fav</SmallButton>
                </View>
                <View style={container}>
                    <Text style={activityStyle}>
                        {this.props.activity.activity.activity}
                    </Text>
                    <View style={priceContainer}><
                        Price price={this.props.activity.activity.price} color={this.props.activity.color.color}/>
                    </View>
                    <View style={infoContainer}>
                        <Accesibility accesibility={this.props.activity.activity.accessibility}
                                      color={this.props.activity.color.color}/>
                        <Type type={this.props.activity.activity.type} color={this.props.activity.color.color}/>
                        <Participants participants={this.props.activity.activity.participants}
                                      color={this.props.activity.color.color}/>
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
    },
    favorite: {
        position: "absolute",
        right: 20,
        top: 50,
    },
});

ActivityDetail.propTypes = {
    activity: PropTypes.object,
};

ActivityDetail.defaultProps = {
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
};

export default ActivityDetail;