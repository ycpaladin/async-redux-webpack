import Immutable from 'immutable'
import actionTypes from '../constants/actionTypes'

const initialItems = Immutable.List([
    { text: 'kevin' },
    { text: 'lxy' },
    { text: 'ccw' }
])

function assign(item, newValue) {
    return Object.assign({}, item, newValue);
}

/**
 * 针对下面的Immutable对象进行增删改查方法应该如何优化？
 */
export default function items(state = initialItems, action) {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return state.push({ text: action.value })
        case actionTypes.DELETE_ITEM:
            return state.delete(action.index)
        case actionTypes.UPDATE_ITEM:
            return state.set(action.index, { text: action.newValue })
        case actionTypes.DELETE_ALL:
            return state.clear()
        case actionTypes.CHANGE_EDIT_STATE:
            var item = assign(state.get(action.index), { isEditing: action.isEditing })
            return state.set(action.index, item)
        case actionTypes.CURRENT_COMPLETED_STATE:
            var item = assign(state.get(action.index), { complete: action.isCompleted })
            return state.set(action.index, item)
        case actionTypes.SET_ALL_CHECKED:
            return state.map((item, index) => assign(item, { complete: action.isCompleted }))
        case actionTypes.DESTORY_COMPLETED:
            if (action.indexAsArray.length) {
                var items = state;
                var array = action.indexAsArray.reverse();
                for (var i = 0; i < array.length; i++) {
                    items = items.delete(array[i]);
                }
                return items;
            } else {
                return state;
            }
        default:
            return state;
    }
}