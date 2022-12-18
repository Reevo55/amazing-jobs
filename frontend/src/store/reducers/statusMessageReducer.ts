import { MessageType, StatusMessageState } from '../../types/types'
import { AnyAction } from '@reduxjs/toolkit'
import { ON_HIDE_STATUS_MESSAGE, ON_SHOW_STATUS_MESSAGE } from '../actions/statusMessage'

export const statusMessageInitialState: StatusMessageState = {
  showMessage: false,
  title: '',
  message: '',
  type: MessageType.success,
  callback: undefined,
}

const statusMessageReducer = (state = statusMessageInitialState, action: AnyAction): StatusMessageState => {
  const payload = action.payload || {}

  switch (action.type) {
    case ON_SHOW_STATUS_MESSAGE:
      return {
        ...state,
        showMessage: true,
        type: payload.type,
        title: payload.title,
        message: payload.message,
        callback: payload.callback,
      }
    case ON_HIDE_STATUS_MESSAGE:
      return {
        ...state,
        showMessage: false,
        title: '',
        message: '',
        callback: undefined,
      }
    default:
      return state
  }
}

export default statusMessageReducer
