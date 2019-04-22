import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import activity from "./modules/activity";

const loggerMiddleware = createLogger(); // initialize logger

const createStoreWithMiddleware = applyMiddleware( loggerMiddleware)(createStore); // apply logger to redux

const reducer = combineReducers({
    activity
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;