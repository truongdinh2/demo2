import * as types from './../constant/ActionTypes'
export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const deleteItem = (id) => {
    return {
        type: types.DELETE_ITEM,
        payload: {
            id
        }
    }
}
export const addItem = (item) => {
    return {
        type: types.ADD_ITEM,
        payload: {
            item
        }
    }
}
export const testItem = (value) => {
    return {
        type: types.TEST,
        payload: {
            value
        }
    }
}
