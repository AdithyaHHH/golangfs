import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Greatings from './greatings.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greatings />
  </StrictMode>,
)
