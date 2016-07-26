import actionTypes from '../constants/actionTypes'
const {SELECT_SUBREDDIT} = actionTypes

function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

export default selectedSubreddit

