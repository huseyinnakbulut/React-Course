import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function savePostReducer(
  state = initialState.savedPost,
  action
) {
  switch (action.type) {
    case actionTypes.UPDATE_POSTS_SUCCESS:
      return action.payload
    case actionTypes.CREATE_POSTS_SUCCESS:
      return action.payload
    default:
      return state
  }
}
