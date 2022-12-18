import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import AppRoutes from './Routes'
import { Provider } from 'react-redux'
import { store } from './store/store'
import ConnectedLoadingOverlayWrapper from './components/utils/LoadingOverlay/LoadingOverlay'
import ConnectedStatusMessage from './components/utils/StatusMessage/StatusMessage'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const overlay = document.createElement('div')
overlay.setAttribute('id', 'overlay-root')
document.getElementById('root')!.parentElement!.appendChild(overlay)
const statusMessage = document.createElement('div')
statusMessage.setAttribute('id', 'status-message-root')
document.getElementById('root')!.parentElement!.appendChild(statusMessage)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedStatusMessage />
      <ConnectedLoadingOverlayWrapper />
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
