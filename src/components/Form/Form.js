import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View, Picker, Platform} from 'react-native';
import Slider from '@react-native-community/slider';
import {BackButton, Button, SmallButton} from "../common";

const data = ["Education", "Recreational"];
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {language:"", text: "", accesibility: 0, price: 0 };
    }

    render(){
        const {view, random, labelContainer, label, textField, slider, picker, title} = styles;
        console.log(this.props);
        return(
            <View style={{...view,...{"backgroundColor":this.props.activity.color.backgroundColor}}}>
               <BackButton color={this.props.activity.color.color}/>
               <View style={random}>
                   <SmallButton color={this.props.activity.color.color}>Random</SmallButton>
               </View>

               <View style={labelContainer}>
                   <Text style={{...label, ...{"color": this.props.activity.color.color}}}>Accesibility</Text>
                   <Text style={{...label, ...{"color": this.props.activity.color.color}}}>{this.state.accesibility}</Text>
               </View>

               <Slider
                   style={slider}
                   minimumValue={0}
                   maximumValue={10}
                   minimumTrackTintColor={this.props.activity.color.color}
                   maximumTrackTintColor="#fff"
                   onValueChange={(accesibility) => this.setState({accesibility})}

                   step={1}
               />

               <Text style={{...title, ...{"color": this.props.activity.color.color}}}>Participants</Text>
               <TextInput
                   keyboardType={"numeric"}
                   onChangeText={(text) => this.setState({text})}
                   returnKeyType={(Platform.OS === 'ios') ? 'done' : 'next'}
                   style={{...textField, ...{"color":this.props.activity.color.color, "borderColor": this.props.activity.color.color}}}
                   value={this.state.text}
               />
               <View style={labelContainer}>
                   <Text style={{...label, ...{"color": this.props.activity.color.color}}}>Price</Text>
                   <Text style={{...label, ...{"color": this.props.activity.color.color}}}>{this.state.price}</Text>
               </View>
               <Slider
                   style={slider}
                   minimumValue={0}
                   maximumValue={5}
                   minimumTrackTintColor={this.props.activity.color.color}
                   maximumTrackTintColor="#FFF"
                   onValueChange={(price) => this.setState({price})}
                   step={1}
               />
               <Text style={{...title, ...{"color": this.props.activity.color.color}}}>Type</Text>
               <Picker
                   itemStyle={{"color":this.props.activity.color.color}}
                   selectedValue={this.state.language}
                   mode="dropdown"
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
               <Button color={this.props.activity.color.color}>Filter</Button>
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
    random: {
       position: "absolute",
        top: 50,
        right: 20

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