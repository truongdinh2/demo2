import * as types from './../constant/ActionTypes';

const initialState = [];

 const MyReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_ITEM: {
            state.push(action.payload.item)
            console.log(action.payload.item)
            return [...state]
        }
        default: return state;
    }
}
export default MyReducer;