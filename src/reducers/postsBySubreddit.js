import Immutable from 'immutable'
import actionTypes from '../constants/actionTypes'
const {INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS, FAILURE_POSTS} = actionTypes
function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    case FAILURE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        errorMessage: action.errorMessage
      })
    default:
      return state
  }
}

function postsBySubreddit(state = {}, action) {

  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
    case FAILURE_POSTS:
      // const subreddit = action.subreddit;//.subreddit;
      var result = Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })

      return result;
    default:
      return state
  }
}

export default postsBySubreddit