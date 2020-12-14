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
export const indexDel = (index) => {
    console.log(index , 'index')
    return {
        type: types.INDEX_DEL,
        payload: index

    }
}
export const indexEdit = (index) => {
    return{
        type: types.INDEX_EDIT,
        payload: index
    }
}
export const onEditSubmit = (index,data) => {
    console.log(index,data)
    return{
        type: types.ON_EDIT_SUBMIT,
        payload: {
            index,
            data
        }
    }
}
