import * as types from './../constant/ActionTypes';
var initialState = { index: '' };
function MyReducer(state = initialState, action) {
    switch (action.type) {
        case types.INDEX_DEL:
            // console.log(action.payload)
            // console.log({
            //     ...state,
            //     index: action.payload
            // })
            return {
                ...state,
                index: action.payload
            };
        case types.INDEX_EDIT:
            console.log(action.payload, 'id')
            return {
                ...state,
                index: action.payload
            }
        default: return state;

    }
}
export default MyReducer;