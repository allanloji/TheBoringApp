import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View, Picker, Platform} from 'react-native';
import Slider from '@react-native-community/slider';
import {BackButton, Button, SmallButton} from "../common";
import { Field, reduxForm } from 'redux-form'
import {Accesibility, Participants, Price, Type} from "./common";


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {language:"", text: "", accesibility: 0, price: 0 };
        this.submit = this.submit.bind(this);
    }
    submit(values){
        console.log('submitting form', values);
    }

    render(){
        const {view, random, labelContainer, label, picker, title} = styles;
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
               <Field name="accesibility" component={Accesibility} props={this.props.activity.color}/>

               <Text style={{...title, ...{"color": this.props.activity.color.color}}}>Participants</Text>
               <Field name="participants" component={Participants} props={this.props.activity.color}/>

               <View style={labelContainer}>
                   <Text style={{...label, ...{"color": this.props.activity.color.color}}}>Price</Text>
                   <Text style={{...label, ...{"color": this.props.activity.color.color}}}>{this.state.price}</Text>
               </View>
              <Field name="price" component={Price} props={this.props.activity.color}/>

               <Text style={{...title, ...{"color": this.props.activity.color.color}}}>Type</Text>
                <Field name="type" component={Type} props={this.props.activity.color}/>

               <Button color={this.props.activity.color.color} onPress={this.props.handleSubmit(this.submit)}>Filter</Button>
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


});

export default reduxForm({
    form: "filter"
})(Form)