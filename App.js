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
import ActivityScreen from "./src/components/activity/ActivityScreen";
import {ActivityDetail} from "./src/components/activity/ActivityDetail/ActivityDetail";
import Form from "./src/components/Form/Form";





const About = () => <Text style={styles.header}>About</Text>;

const Topic = () => <Text style={styles.header}>Topic</Text>;



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <NativeRouter>
            <Route exact path="/" component={ActivityScreen} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Form} />
            <Route path="/details" component={ActivityDetail} />
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
