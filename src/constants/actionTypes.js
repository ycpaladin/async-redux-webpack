import keyMirror from 'fbjs/lib/keyMirror'

// export default keyMirror({
//     ADD_ITEM: null,
//     DELETE_ITEM: null,
//     DELETE_ALL: null,
// })

module.exports = keyMirror({
  ADD_ITEM: null,
  TODO_COMPLETE: null,
  DELETE_ITEM: null,
  TODO_DESTROY_COMPLETED: null,
  TODO_TOGGLE_COMPLETE_ALL: null,
  TODO_UNDO_COMPLETE: null,
  UPDATE_ITEM: null,
  CHANGE_EDIT_STATE: null,
  CURRENT_COMPLETED_STATE: null,
  ALL_COMPLETE: null,
  SET_ALL_CHECKED: null,
  DESTORY_COMPLETED: null,
  ITEM_LOADING: null
});
