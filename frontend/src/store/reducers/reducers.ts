import { combineReducers } from '@reduxjs/toolkit'
import profileReducer from './profileReducer'
import offerReducer from './offerReducer'

export default combineReducers({
  profileState: profileReducer,
  offerState: offerReducer,
})
