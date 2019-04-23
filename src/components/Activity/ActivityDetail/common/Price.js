import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import PropTypes from "prop-types";

function Price({price, color}) {
    return (
        <View>
            {drawPrices(price, color)}
        </View>
    );
}

function drawPrices(price, color){
     const {container, text, emptyText} = styles;
     const textStyle = {...text, ...{"color": color}};
     const symbolCont = Math.ceil(price * 5);

     let priceText = "";
     let emptyPrice= "";
     let i = 0;

     while(i < 5){
         if(i < symbolCont){
             priceText += "$";
         }else{
            emptyPrice += "$";
         }
         i++;
     }

    return(
      <View style={container}>
          <Text style={textStyle}>{priceText}</Text>
          <Text style={emptyText}>{emptyPrice}</Text>
      </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    text:{
        fontSize: 20,
        letterSpacing: 10,
    },
    emptyText: {
        color: "#fff",
        fontSize: 20,
        letterSpacing: 10,
    }
});

Price.propTypes = {
    price: PropTypes.number,
    color: PropTypes.string
};

Price.defaultProps = {
    price: 1,
    color: "#000",
};

export { Price };