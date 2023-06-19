import { combineReducers } from 'redux'
import savePostReducer from './savePostReducer'
import postListReducer from './postListReducer'
import changeCategoryReducer from './categoryListReducer'
import categoryListReducer from './categoryListReducer'
import currentPasswordReducer from './currentPasswordReducer'
import currentUsernameReducer from './currentUsernameReducer'
import loginReducer from './loginReducer'
import IsOnlineReducer from './isOnlineReducer'
const rootReducer = combineReducers({
  savePostReducer,
  postListReducer,
  changeCategoryReducer,
  categoryListReducer,
  loginReducer,
  currentPasswordReducer,
  currentUsernameReducer,
  IsOnlineReducer,
})

export default rootReducer
