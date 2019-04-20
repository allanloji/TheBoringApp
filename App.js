/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Home = () => <Text style={styles.header}>Home</Text>;

const About = () => <Text style={styles.header}>About</Text>;

const Topic = () => <Text style={styles.header}>Topic</Text>;



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <NativeRouter>
          <View style={styles.container}>


            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topic} />

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
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20
  },
  nav: {
    bottom: 20,
    flexDirection: "row",
    position:"absolute",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },

});
