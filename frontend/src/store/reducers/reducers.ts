import { combineReducers } from '@reduxjs/toolkit'
import profileReducer from './profileReducer'

export default combineReducers({
  profileState: profileReducer,
})
