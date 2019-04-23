/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { NativeRouter, Route } from "react-router-native";
import { Provider } from 'react-redux';
import activityContainer from './src/containers/activityContainer';
import store from './src/redux/configureStore';
import activityDetailContainer from "./src/containers/activityDetailContainer";
import formContainer from "./src/containers/formContainer";
import favoritesContainer from "./src/containers/favoritesContainer";



export default class App extends Component{
  render() {
    return (

          <NativeRouter>
            <Provider store={store}>
              <Route exact path="/" component={activityContainer} />
              <Route path="/form" component={formContainer} />
              <Route path="/details" component={activityDetailContainer} />
              <Route path="/favorites" component={favoritesContainer} />
            </Provider>
          </NativeRouter>


    );
  }
}
