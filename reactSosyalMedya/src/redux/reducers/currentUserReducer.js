// currentUserReducer.js

import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function currentUserReducer(
  state = initialState.currentUser,
  action
) {
  switch (action.type) {
    case actionTypes.LOGIN_USER_SUCCESS:
      const { user } = action.payload
      return { ...state, ...user }
    default:
      return state
  }
}
