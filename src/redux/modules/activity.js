
const COLOR_CHANGED = 'COLOR_CHANGED';
const FETCH_ACTIVITY = "FETCH_ACTIVITY";
const FETCH_ACTIVITY_FAILURE = "FETCH_ACTIVITY_FAILURE";
const FETCH_ACTIVITY_SUCCESS = "FETCH_ACTIVITY_SUCCESS";

const initialState = {
    activity: "Swipe Left to get an activity.",
    accessibility: 0,
    type: "education",
    participants: 1,
    price: 0,
    key: "3943506",
    color: {
        backgroundColor: "#6FBCB7",
        color: "#C0ED8A",
    },
    newActivity:{}
}; //The initial state of this reducer (will be combined with the states of other reducers as your app grows)

export function colorChange(newColor){
    return {
        type: COLOR_CHANGED,
        newColor
    }
}

export function fetchActivity(){
    return {
        type: FETCH_ACTIVITY
    }
}

export function fetchActivitySuccess(activity){
    return {
        type: FETCH_ACTIVITY_SUCCESS,
        activity
    }
}

export function fetchActivityFailure(message){
    return {
        type: FETCH_ACTIVITY_FAILURE,
        message
    }
}



export default function reducer(state = initialState, action){ // a function that has two parameters, state (which is initialized as our initialState obj), and action, which we'll cover soon.
    switch (action.type){

        case COLOR_CHANGED:
            return Object.assign(
                {},
                state,
                {color: action.newColor}
            );

        case FETCH_ACTIVITY_SUCCESS:
            console.log("entra a payload");
            return Object.assign(
                {},
                state,
                {newActivity: action.activity}
            );

        default:
            return state;
    }
}