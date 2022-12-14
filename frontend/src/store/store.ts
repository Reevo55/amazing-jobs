import { AppState } from '../types/types'
import { profileInitialState } from './reducers/profileReducer'
import { AnyAction, configureStore } from '@reduxjs/toolkit'
import { Store } from 'redux'
import reduxThunk, { ThunkDispatch } from 'redux-thunk'
import rootReducer from './reducers/reducers'
import { offerInitialState } from './reducers/offerReducer'
import { statusMessageInitialState } from './reducers/statusMessageReducer'
import { comparatorInitialState } from './reducers/comparatorReducer'

export const initialState: AppState = {
  profileState: profileInitialState,
  offerState: offerInitialState,
  statusMessageState: statusMessageInitialState,
  comparatorState: comparatorInitialState,
}

export const store: Store<AppState> & { dispatch: ThunkDispatch<AppState, any, AnyAction> } = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: [reduxThunk],
})
