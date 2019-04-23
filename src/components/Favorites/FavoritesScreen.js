import React, { Component } from 'react';
import {StyleSheet, FlatList, Text, View,} from 'react-native';
import {NavBar} from "../common";
import PropTypes from "prop-types";
import {Favorite} from "./common";



class FavoritesScreen extends Component {
    constructor(props){
        super(props);

    }

    deleteFavorite(index) {
        this.props.deleteFavorite(index)
    };

    renderList(){
        const {footer, empty, emptyText, listContainer} = styles;
        const emptyTextStyle = {...emptyText, ...{"color": this.props.activity.color.color}};
        if(this.props.favorites.favorites.length > 0){
            return(
                <View style={listContainer}>
                    <FlatList
                        data={this.props.favorites.favorites}
                        keyExtractor={(item,index) => index.toString()}
                        renderItem={({item, index}) => (
                            <View>
                                <Favorite id={index} activity={item} color={this.props.activity.color.color}
                                          onPress={this.deleteFavorite.bind(this,index)} />
                            </View>
                        )
                        }
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={<View style={footer}></View>}
                    />
                </View>

            );
        }else{
            return (
                <View style={empty}>
                    <Text style={emptyTextStyle}>No favorite activities added.</Text>
                </View>
            );

        }
    }


    render(){
        const {view} = styles;
        const viewStyle = {...view, ...{"backgroundColor": this.props.activity.color.backgroundColor}};
        return(
            <View style={viewStyle}>
                {this.renderList()}
                <NavBar/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    footer: {
        height: 0,
        marginBottom: 100
    },
    listContainer: {
        marginTop: 40
    },
    empty: {
        alignItems: "center",
        alignSelf: "center",
        flex: 1,
        justifyContent: "center"
    },
    emptyText: {
        fontSize: 50,
        fontWeight: "600",
        padding: 20,
        textAlignVertical: "center",
    }
});

FavoritesScreen.propTypes = {
    activity: PropTypes.object,
    deleteFavorite: PropTypes.func
};

FavoritesScreen.defaultProps = {
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

    deleteFavorite: () => console.log("deleteFavorite")

};


export default FavoritesScreen;
