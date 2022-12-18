import { connect } from 'react-redux'
import { AppState, MessageType } from '../../../types/types'
import React from 'react'
import './StatusMessage.css'
import ReactDOM from 'react-dom'
import { useAppDispatch } from '../../../hooks'
import { onHideStatusMessage } from '../../../store/actions/statusMessage'

interface StatusMessageProps {
  showMessage: boolean
  title: string
  message: string
  type: MessageType
  callback?: () => void
}

const StatusMessage: React.FC<StatusMessageProps> = (props: StatusMessageProps) => {
  const dispatch = useAppDispatch()

  const getLeadingStyle = () => {
    switch (props.type) {
      case MessageType.success:
        return `bg-emerald-400 hover:bg-emerald-300`
      case MessageType.failure:
        return `bg-red-600 hover:bg-red-400`
      case MessageType.info:
        return `bg-blue-500 hover:bg-blue-400`
      default:
        return `bg-emerald-400 hover:bg-emerald-300`
    }
  }

  const showMessage = (): React.ReactNode => {
    return (
      <>
        {props.showMessage && (
          <div className={'modal-backdrop backdrop-blur'}>
            <div className={'status-message bg-white p-4'}>
              <div>
                <div className={'message-header'}>
                  <p>{props.title}</p>
                </div>
                <div className={'mb-4 border-b-2 border-slate-600'} />
                <div className={'message-content'}>
                  <p>{props.message}</p>
                </div>
                <div className={'message-footer text-right mr-2'}>
                  <button
                    className={`${getLeadingStyle()} text-white mt-2 py-1 px-2 rounded-md`}
                    onClick={() => {
                      dispatch(onHideStatusMessage())
                      props.callback && props.callback()
                    }}>
                    Zamknij
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
  return <>{ReactDOM.createPortal(showMessage(), document.getElementById('status-message-root')!)}</>
}

export default connect(
  (state: AppState): StatusMessageProps => ({
    showMessage: state.statusMessageState.showMessage,
    title: state.statusMessageState.title || '',
    message: state.statusMessageState.message || '',
    type: state.statusMessageState.type || MessageType.success,
    callback: state.statusMessageState.callback || undefined,
  })
)(StatusMessage)
