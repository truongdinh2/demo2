// import myReducers from '.';
import * as types from './../constant/ActionTypes';

var initialState = false;
const MyReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM:
            return !state;
        case types.EDIT_FORM:
            return true;
        case types.CLOSE_FORM:
            return false;
        default: return state;
    }
}
export default MyReducer;