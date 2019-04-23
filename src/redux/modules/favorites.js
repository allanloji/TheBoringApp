const ADD_FAVORITE = "ADD_FAVORITE";
const DELETE_FAVORITE = "DELETE_FAVORITE";

const initialState = {
    favorites: [

    ]
};


export function addFavorite(activity){
    return {
        type: ADD_FAVORITE,
        activity
    }
}

export function deleteFavorite(index){
    return {
        type: DELETE_FAVORITE,
        index
    }
}


export default function reducer(state = initialState, action){
    switch (action.type){

        case ADD_FAVORITE:
            return Object.assign(
                {},
                state,
                {
                    favorites: [...state.favorites, action.activity],
                }
            );

        case DELETE_FAVORITE:
            return Object.assign(
                {},
                state,
                {
                    favorites: [
                        ...state.favorites.slice(0, action.index),
                        ...state.favorites.slice(action.index+1)
                    ]
                }
            );


        default:
            return state;
    }

}