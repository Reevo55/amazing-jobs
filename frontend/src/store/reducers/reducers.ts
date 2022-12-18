import { combineReducers } from '@reduxjs/toolkit'
import profileReducer from './profileReducer'
import offerReducer from './offerReducer'
import statusMessageReducer from './statusMessageReducer'

export default combineReducers({
  profileState: profileReducer,
  offerState: offerReducer,
  statusMessageState: statusMessageReducer,
})
