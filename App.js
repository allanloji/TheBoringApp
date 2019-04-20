/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import ActivityScreen from "./src/components/activity/ActivityScreen";
import {ActivityDetail} from "./src/components/activity/ActivityDetail/ActivityDetail";





const About = () => <Text style={styles.header}>About</Text>;

const Topic = () => <Text style={styles.header}>Topic</Text>;



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <NativeRouter>
          <View style={styles.container}>


            <Route exact path="/" component={ActivityDetail} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topic} />
            <Route path="/details" component={ActivityDetail} />

            <View style={styles.nav}>
              <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text>Home</Text>
              </Link>
              <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text>About</Text>
              </Link>
              <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text>Topics</Text>
              </Link>
            </View>
          </View>
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
