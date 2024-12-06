import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/Sidebar.css'
import './components/Playcontrols.css'
import Sidebar from './components/Sidebar.jsx'
import Playcontrols from './components/Playcontrols.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sidebar />
    <Playcontrols/>
  </StrictMode>,
)
