import { MessageType } from '../../types/types'

export const ON_SHOW_STATUS_MESSAGE = 'ON_SHOW_STATUS_MESSAGE'
export const ON_HIDE_STATUS_MESSAGE = 'ON_HIDE_STATUS_MESSAGE'

export const onShowStatusMessage = (title: string, message: string, type: MessageType, callback: () => void) => ({
  type: ON_SHOW_STATUS_MESSAGE,
  payload: { title, message, type, callback },
})

export const onHideStatusMessage = () => ({
  type: ON_HIDE_STATUS_MESSAGE,
  payload: {},
})
