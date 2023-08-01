import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ContactForm from './Components/ContactForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactForm/>
  </React.StrictMode>,
)
