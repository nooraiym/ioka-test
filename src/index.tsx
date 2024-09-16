import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { AppProvider } from './Context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <AppProvider
    totalItems={100}
    limit={10}
  >
    <App />
  </AppProvider>
)
