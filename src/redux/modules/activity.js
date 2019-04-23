
const COLOR_CHANGED = 'COLOR_CHANGED';
const FILTER_ACTIVITY = 'FILTER_ACTIVITY';
const FETCH_ACTIVITY = "FETCH_ACTIVITY";
const FETCH_ACTIVITY_FAILURE = "FETCH_ACTIVITY_FAILURE";
const FETCH_ACTIVITY_SUCCESS = "FETCH_ACTIVITY_SUCCESS";
const RANDOM_ACTIVITY = "RANDOM_ACTIVITY";


const initialState = {
    activity:{
        activity: "Swipe Left to get an activity.",
        accessibility: 0,
        type: "education",
        participants: 1,
        price: 0,
        key: "3943506",
    },
    filter:{},
    query:"",
    color: {
        backgroundColor: "#6FBCB7",
        color: "#C0ED8A",
    },
};

export function colorChange(newColor){
    return {
        type: COLOR_CHANGED,
        newColor
    }
}

export function fetchActivity(filters){
    return {
        type: FETCH_ACTIVITY,
        filters
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

export function filterActivity(filter){
    return {
        type: FILTER_ACTIVITY,
            filter
    }
}

export function randomActivity(){
    return {
        type: RANDOM_ACTIVITY
    }
}





export default function reducer(state = initialState, action){
    switch (action.type){

        case COLOR_CHANGED:
            return Object.assign(
                {},
                state,
                {color: action.newColor}
            );

        case FETCH_ACTIVITY_SUCCESS:
            let emptyActivity = {
                    activity: "No activities with this parameters",
                    accessibility: 0,
                    type: "education",
                    participants: 1,
                    price: 0,
                    key: "3943506",
                };
            if(action.activity.activity === undefined){
                return Object.assign(
                    {},
                    state,
                    {activity: emptyActivity}
                );
            }
            return Object.assign(
                {},
                state,
                {activity: action.activity}
            );

        case FILTER_ACTIVITY:
            let query="";
            //Range of API 0-1.0 0 being the most accesible
            if(action.filter.accesibility !== undefined){
                query+="accessibility=" + (-(action.filter.accesibility/10) + 1.0).toFixed(1) + "&";
            }

            if(action.filter.participants !== undefined){
                query+="participants=" + action.filter.participants + "&";
            }

            if(action.filter.price !== undefined){
                query+="price=" + (action.filter.price/5) + "&";
            }

            if(action.filter.type !== undefined){
                query+="type=" + action.filter.type + "&";
            }

            return Object.assign(
                {},
                state,
                {filter: action.filter, query: query}
            );

        case RANDOM_ACTIVITY:
            return Object.assign(
                {},
                state,
                {filter: {}, query: ""}
            );



        default:
            return state;
    }
}