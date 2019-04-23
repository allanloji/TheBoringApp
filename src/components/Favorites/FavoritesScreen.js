import React, { Component } from 'react';
import {StyleSheet, FlatList, Text, View,} from 'react-native';
import {Button, NavBar, SmallButton} from "../common";
import PropTypes from "prop-types";
import {Favorite} from "./common";



class FavoritesScreen extends Component {
    constructor(props){
        super(props);

    }

    render(){
        const {view, activity, buttonContainer, filter} = styles;
        const viewStyle = {...view, ...{"backgroundColor": this.props.activity.color.backgroundColor}};
        console.log(this.props);
        return(
            <View style={viewStyle}>
                <FlatList
                    data={this.props.favorites.favorites}
                    renderItem={({item}) => (
                        <View>
                            <Favorite activity={item} color={this.props.activity.color.color}/>
                        </View>
                    )
                    }
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={<View style={{ height: 0, marginBottom: 100 }}></View>}
                />
                <NavBar/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingTop: 50
    },
});

FavoritesScreen.propTypes = {

};

FavoritesScreen.defaultProps = {


};


export default FavoritesScreen;
