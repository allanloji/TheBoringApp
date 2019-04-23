import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View, Picker, Platform} from 'react-native';
import {BackButton, Button, SmallButton} from "../common";
import { Field, reduxForm } from 'redux-form'
import {Accesibility, Participants, Price, Type} from "./common";


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {language:"", text: "", accesibility: 0, price: 0 };
        this.eraseFilters= this.eraseFilters.bind(this);
    }

    submit(values){
        this.props.filterActivity(values);
        this.props.history.push("/")
    }

    eraseFilters(){
        this.props.randomActivity();
        this.props.history.push("/")
    }

    render(){
        const {view, random, labelContainer, label, picker, title} = styles;
        console.log(this.props);
        return(
            <View style={{...view,...{"backgroundColor":this.props.activity.color.backgroundColor}}}>
               <BackButton color={this.props.activity.color.color}/>
               <View style={random}>
                   <SmallButton color={this.props.activity.color.color} onPress={this.eraseFilters}>No Filters</SmallButton>
               </View>


               <Field name="accesibility"  component={Accesibility}
                      props={{color: this.props.activity.color.color, lastValue:this.props.activity.filter.accesibility}} />

               <Field name="participants" component={Participants}
                      props={{color: this.props.activity.color.color, lastValue:this.props.activity.filter.participants}}/>

               <Field name="price" component={Price}
                      props={{color: this.props.activity.color.color, lastValue:this.props.activity.filter.price}}/>

               <Field name="type" component={Type}
                      props={{color: this.props.activity.color.color, lastValue:this.props.activity.filter.type}}/>

               <Button color={this.props.activity.color.color}
                       onPress={this.props.handleSubmit((values) => this.submit(values))}>
                   Filter
               </Button>
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
        right: 20,
        top: 50,


    },
    labelContainer: {
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 30,
    },
    label: {
        fontSize: 20,
        marginRight: 20,
    },
});

export default reduxForm({
    form: "filter",
})(Form)