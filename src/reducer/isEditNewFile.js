import * as types from './../constant/ActionTypes';

var initialState = true;
const MyReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.IS_EDIT_OLD_FILE:
            return false;
        case types.IS_NEW_FILE:
            // console.log(action)
            return true;
        
        default: return state;
    }
}
export default MyReducer;