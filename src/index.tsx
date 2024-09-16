import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { AppProvider } from './context/AppContext'
import { POSTS_PER_PAGE, TOTAL_POSTS } from './constants/main'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <AppProvider
    totalItems={TOTAL_POSTS}
    limit={POSTS_PER_PAGE}
  >
    <App />
  </AppProvider>
)
