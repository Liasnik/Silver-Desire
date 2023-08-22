import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/reset.css'
import './styles/common.css'
import 'tailwindcss/tailwind.css'
import { ModalState } from './conponents/context/ModalContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ModalState>
      <App />
    </ModalState>
  </React.StrictMode>
)
