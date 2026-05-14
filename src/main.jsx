import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { LeadProvider } from './context/LeadContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <LeadProvider>
        <App />
      </LeadProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
