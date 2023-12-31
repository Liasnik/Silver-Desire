import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/reset.css'
import './styles/common.css'
import 'tailwindcss/tailwind.css'
import { ModalState } from './conponents/context/ModalContext'
import { Provider } from 'react-redux'
import { store } from './store'
import './firebase'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ModalState>
          <App />
        </ModalState>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
