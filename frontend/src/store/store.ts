import { AppState } from '../types/types'
import { profileInitialState } from './reducers/profileReducer'
import { AnyAction, configureStore, Store } from '@reduxjs/toolkit'
import reduxThunk, { ThunkDispatch } from 'redux-thunk'
import rootReducer from './reducers/reducers'

export const initialState: AppState = {
  profileState: profileInitialState,
}

export const store: Store<AppState> & { dispatch: ThunkDispatch<AppState, any, AnyAction> } = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: [reduxThunk],
})
