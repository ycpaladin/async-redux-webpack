import actionTypes from '../constants/actionTypes'

export function addItem(item) {
    return {
        type: actionTypes.ADD_ITEM,
        value: item
    }
}


export function deleteItem(index) {
    return {
        type: actionTypes.DELETE_ITEM,
        index: index
    }
}


export function updateItem(id, text) {
    return {
        type: actionTypes.UPDATE_ITEM,
        index: id,
        newValue: text
    }
}


export function changeEditState(index, isEditing) {
    return {
        type: actionTypes.CHANGE_EDIT_STATE,
        index: index,
        isEditing: isEditing
    }
}

export function changeCompletedState(index, isCompleted) {
    return {
        type: actionTypes.CURRENT_COMPLETED_STATE,
        index,
        isCompleted
    }
}

export function setAllChecked(isCompleted) {
    return {
        type: actionTypes.SET_ALL_CHECKED,
        isCompleted
    }
}

export function allComplete(items) {
    return {
        type: actionTypes.ALL_COMPLETE,
        items
    }
}

export function destroyCompleted(indexAsArray) {
    return {
        type: actionTypes.DESTORY_COMPLETED,
        indexAsArray
    }
}