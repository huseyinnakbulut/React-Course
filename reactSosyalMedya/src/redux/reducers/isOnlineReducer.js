import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function IsOnlineReducer(state = initialState.IsOnline, action) {
  switch (action.type) {
    case types.IS_ONLINE:
      return action.payload
    default:
      return state
  }
}
