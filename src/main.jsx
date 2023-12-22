import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Router/Router'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className=' max-w-screen-2xl mx-auto'>
        <RouterProvider router={routes} />
      </div>
    </HelmetProvider>
  </React.StrictMode>,
)
