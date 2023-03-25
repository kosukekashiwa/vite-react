import React from 'react'
import ReactDOM from 'react-dom/client'

import { worker } from '~/mocks/browser'
import '~/index.css'
import App from '~/views/App'

if (process.env.NODE_ENV === 'development') {
  // If you want to eliminate "[MSW] Warning: captured a request without a matching request handler:" warnings,
  // change it like "worker.start({onUnhandledRequest: 'bypass'})".
  worker.start()
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
