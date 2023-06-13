import { combineReducers } from 'redux'
import loginUserReducer from './loginUserReducer'
import userReducer from './userReducer'
import savePostReducer from './savePostReducer'
import postListReducer from './postListReducer'
import changeCategoryReducer from './categoryListReducer'
import categoryListReducer from './categoryListReducer'
const rootReducer = combineReducers({
  loginUserReducer,
  userReducer,
  savePostReducer,
  postListReducer,
  changeCategoryReducer,
  categoryListReducer,
})

export default rootReducer
