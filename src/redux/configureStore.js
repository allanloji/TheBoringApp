import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import activity from "./modules/activity";
import { reducer as formReducer } from 'redux-form';

const loggerMiddleware = createLogger(); // initialize logger

const createStoreWithMiddleware = applyMiddleware( loggerMiddleware)(createStore); // apply logger to redux

const reducer = combineReducers({
    activity,
    form: formReducer
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;