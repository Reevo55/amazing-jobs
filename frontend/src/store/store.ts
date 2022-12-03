import { AppState } from '../types/types'
import { profileInitialState } from './reducers/profileReducer'
import { AnyAction, configureStore } from '@reduxjs/toolkit'
import { Store } from 'redux'
import reduxThunk, { ThunkDispatch } from 'redux-thunk'
import rootReducer from './reducers/reducers'
import { offerInitialState } from './reducers/offerReducer'

export const initialState: AppState = {
  profileState: profileInitialState,
  offerState: offerInitialState,
}

export const store: Store<AppState> & { dispatch: ThunkDispatch<AppState, any, AnyAction> } = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: [reduxThunk],
})
