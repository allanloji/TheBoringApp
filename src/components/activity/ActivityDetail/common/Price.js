import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

function Price({price}) {
    return (
        <View>
            {drawPrices(price)}
        </View>
    );
}

function drawPrices(price){
    const {container, text, emptyText} = styles;

     const symbolCont =Math.ceil(price * 5);

     let priceText = "";
     let emptyPrice= "";
     let i = 0;
     while(i < 5){
         if(i < symbolCont){
             console.log("Entra");
             priceText += "$";
         }else{
            emptyPrice += "$";
         }
         i++;
     }
    return(
      <View style={container}>
          <Text style={text}>{priceText}</Text>
          <Text style={emptyText}>{emptyPrice}</Text>
      </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    text:{
        color: "#000",
        fontSize: 20,
        letterSpacing: 10,


    },
    emptyText: {
        color: "grey",
        fontSize: 20,
        letterSpacing: 10,

    }
});

export { Price };