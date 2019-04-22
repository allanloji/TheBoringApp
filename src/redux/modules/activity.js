const COLOR_CHANGED = 'COLOR_CHANGED';

const initialState = {
    activity: "Learn Express.js",
    accessibility: 0.25,
    type: "education",
    participants: 1,
    price: 0.1,
    link: "https://expressjs.com/",
    key: "3943506",
    color: {
        backgroundColor: "#6FBCB7",
        color: "#C0ED8A",

    }
}; //The initial state of this reducer (will be combined with the states of other reducers as your app grows)

export function colorChange(newColor){
    return {
        type: COLOR_CHANGED,
        newColor
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

        default:
            return state;
    }
}