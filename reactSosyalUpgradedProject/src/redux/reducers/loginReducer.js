import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function loginReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.GET_USERNAME_PASSWORD_SUCCESS:
      return action.payload
    default:
      return state
  }
}
