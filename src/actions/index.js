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
export const dataLoad = () => {
    return {
        type: types.DATA_LOAD
    }
}
export const AddFile = (file) => {
    return {
        type: types.ADD_FILE,
        file // file: file
    }
}
export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}
export const editForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}
export const closeForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}
export const OldFile = () => {
    return {
        type: types.IS_EDIT_OLD_FILE
    }
}
export const newFile = () => {
    return {
        type: types.IS_NEW_FILE
    }
}
