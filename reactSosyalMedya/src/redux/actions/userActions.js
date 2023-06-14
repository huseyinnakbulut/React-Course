import * as types from './actionTypes'

export function getUsernamePasswordSuccess(result) {
  return {
    type: types.GET_USERNAME_PASSWORD_SUCCESS,
    payload: result,
  }
}
export function IsOnlineTrue(status) {
  return {
    type: types.IS_ONLINE,
    payload: status,
  }
}
export function getUsernamePassword(username, password) {
  return function (dispatch) {
    let url = 'http://localhost:3000/users'
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        var user = data.find(
          (x) => x.userMail === username && x.userPassword === password
        )
        if (user) {
          dispatch(getUsernamePasswordSuccess(user))
          dispatch(IsOnlineTrue(true))
        } else {
          console.log('User not found')
        }
      })
  }
}
export function currentUsername(username) {
  return {
    type: types.CURRENT_USERNAME,
    payload: username,
  }
}
export function currentPassword(password) {
  return {
    type: types.CURRENT_PASSWORD,
    payload: password,
  }
}
