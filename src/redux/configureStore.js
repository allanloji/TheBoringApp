import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import activity from "./modules/activity";
import { reducer as formReducer } from 'redux-form';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import {fetchActivityEpic} from "../epics/activityEpic";

const loggerMiddleware = createLogger();
const epicMiddleware = createEpicMiddleware();

const reducer = combineReducers({
    activity,
    form: formReducer
});

const epic = combineEpics(
    fetchActivityEpic
);

const store =  createStore(reducer, applyMiddleware(loggerMiddleware, epicMiddleware));

epicMiddleware.run(epic);
export default store;