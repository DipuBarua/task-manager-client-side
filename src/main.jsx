import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Router/Router'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className=' max-w-screen-2xl mx-auto'>
          <RouterProvider router={routes} />
        </div>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
