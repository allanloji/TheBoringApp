import React from 'react';
import {Picker, StyleSheet, Text, View} from 'react-native';


function Type({lastValue, color, input: { onChange, value }}) {
    const {picker, title} = styles;
    const item = { "color": color};
    const titleStyle= {...title, ...{"color": color}};
    if(value === '' && lastValue !== value){
        value = lastValue;
    }
    return (
        <View>
            <Text style={titleStyle}>Type</Text>
            <Picker
                value={value}
                itemStyle={item}
                selectedValue={value}
                mode="dropdown"
                style={picker}
                onValueChange={onChange}
            >
                <Picker.Item label="Random" value="random" />
                <Picker.Item label="Education" value="education" />
                <Picker.Item label="Recreational" value="recreational" />
                <Picker.Item label="Social" value="social" />
                <Picker.Item label="DIY" value="diy" />
                <Picker.Item label="Charity" value="charity" />
                <Picker.Item label="Cooking" value="cooking" />
                <Picker.Item label="Relaxation" value="relaxation" />
                <Picker.Item label="Music" value="music" />
                <Picker.Item label="Busywork" value="busywork" />
            </Picker>
        </View>

    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 30,
    },
    picker: {
        alignSelf: "center",
        width: 150
    },
});

export {Type};