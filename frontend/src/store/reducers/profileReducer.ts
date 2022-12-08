import { ProfileState } from '../../types/types'
import { AnyAction } from '@reduxjs/toolkit'
import { ON_IS_LOADING_CHANGE, ON_LOADING_ERROR } from '../actions/profile'

export const profileInitialState: ProfileState = {
  isLoading: false,
  loadingErrorOccurred: false,
}

const profileReducer = (state = profileInitialState, action: AnyAction): ProfileState => {
  const { isLoading } = action.payload || {}

  switch (action.type) {
    case ON_IS_LOADING_CHANGE:
      console.log(`change to ${isLoading}`)
      return {
        ...state,
        isLoading,
        loadingErrorOccurred: false,
      }
    case ON_LOADING_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingErrorOccurred: true,
      }
    default:
      return state
  }
}

export default profileReducer
