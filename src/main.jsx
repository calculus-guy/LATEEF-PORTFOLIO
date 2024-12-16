import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'process/browser';  // Polyfill process in the browser

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)