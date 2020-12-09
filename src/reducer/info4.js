// import myReducers from ".";

import * as types from './../constant/ActionTypes'
var initialState = {
    
};

const myReducer = (state = initialState, action) => {
    // return state
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.DELETE_ITEM:
            
            return {
                ...state,
                id : action.payload.id
            };
            case types.TEST:
                return{
                    ...state,
                    name: action.payload.value, 
                }
        default: return state;
    }
}

export default myReducer;