import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <App />
  </React.StrictMode>,
)

// const rootNode = document.getElementById('root')
// const root = ReactDOM.createRoot(rootNode)
// root.render(<App/>)