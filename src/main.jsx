import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ProfileApp } from './ProfileApp'
import './styles.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <ProfileApp />

    </BrowserRouter>
  </React.StrictMode>,
)
