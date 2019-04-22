/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import { NativeRouter, Route } from "react-router-native";
import { Provider } from 'react-redux';
import activityContainer from './src/containers/activityContainer';
import configureStore from './src/redux/configureStore';
import activityDetailContainer from "./src/containers/activityDetailContainer";
import formContainer from "./src/containers/formContainer";





const About = () => <Text style={styles.header}>About</Text>;


const store = configureStore();


export default class App extends Component{
  render() {
    return (

          <NativeRouter>
            <Provider store={store}>
              <Route exact path="/" component={activityContainer} />
              <Route path="/about" component={About} />
              <Route path="/form" component={formContainer} />
              <Route path="/details" component={activityDetailContainer} />
            </Provider>
          </NativeRouter>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20
  },
  nav: {
    backgroundColor: "#fff",
    bottom: 0,
    flexDirection: "row",
    paddingBottom: 20,
    position:"absolute",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },

});
