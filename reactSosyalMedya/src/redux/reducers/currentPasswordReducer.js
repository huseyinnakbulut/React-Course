import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function currentPasswordReducer(
  state = initialState.currentPassword,
  action
) {
  switch (action.type) {
    case types.CURRENT_PASSWORD:
      return action.payload
    default:
      return state
  }
}
