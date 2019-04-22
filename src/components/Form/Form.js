import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View, Picker, Platform} from 'react-native';
import Slider from '@react-native-community/slider';
import {BackButton, Button} from "../common";

const data = ["Education", "Recreational"];
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {language:"", text: "", accesibility: 0, price: 0 };
    }

    render(){
        const {view, labelContainer, label, textField, slider, picker, title} = styles;
        return(
           <View style={view}>
               <BackButton/>
               <View style={labelContainer}>
                   <Text style={label}>Accesibility</Text>
                   <Text style={label}>{this.state.accesibility}</Text>
               </View>

               <Slider
                   style={slider}
                   minimumValue={0}
                   maximumValue={10}
                   minimumTrackTintColor="#000"
                   maximumTrackTintColor="#FFF"
                   onValueChange={(accesibility) => this.setState({accesibility})}

                   step={1}
               />

               <Text style={title}>Participants</Text>
               <TextInput
                   keyboardType={"numeric"}
                   onChangeText={(text) => this.setState({text})}
                   returnKeyType={(Platform.OS === 'ios') ? 'done' : 'next'}
                   style={textField}
                   value={this.state.text}
               />
               <View style={labelContainer}>
                   <Text style={label}>Price</Text>
                   <Text style={label}>{this.state.price}</Text>
               </View>
               <Slider
                   style={slider}
                   minimumValue={0}
                   maximumValue={5}
                   minimumTrackTintColor="#000"
                   maximumTrackTintColor="#FFF"
                   onValueChange={(price) => this.setState({price})}
                   step={1}
               />
               <Text style={title}>Type</Text>
               <Picker
                   selectedValue={this.state.language}
                   style={picker}
                   onValueChange={(itemValue, itemIndex) =>
                       this.setState({language: itemValue})
                   }>
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
               <Button>Filter</Button>
           </View>


        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingTop: 100,
        paddingHorizontal: 20
    },
    labelContainer: {
      flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 30,
    },
    label: {
        fontSize: 20,
        marginRight: 20,
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 30,
    },
    textField: {
        borderColor: "#000",
        borderRadius: 20,
        borderWidth: 1,
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 20
    },
    slider: {
        height: 40
    },
    picker: {
        alignSelf: "center",
        width: 150
    }
});

export default Form;