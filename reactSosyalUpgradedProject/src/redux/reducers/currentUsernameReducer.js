import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function currentUsernameReducer(
  state = initialState.currentUsername,
  action
) {
  switch (action.type) {
    case types.CURRENT_USERNAME:
      return action.payload
    default:
      return state
  }
}
