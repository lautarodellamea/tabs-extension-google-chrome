import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import './styles/input-group.css'
import './styles/groups.css'
import './styles/tabs.css'
import './styles/modal-groups.css'
import './styles/modal-settings-group.css'
import { GroupsProvider } from './providers/groups.provider.tsx'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GroupsProvider>
      <App />
    </GroupsProvider>
  </React.StrictMode>,
)
