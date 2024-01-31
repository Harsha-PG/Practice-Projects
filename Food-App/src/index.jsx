import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Tile } from './Cars'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tile header= "Header 1" />
    <App />
    <Tile header= "Header 2" />
    <App />
  </React.StrictMode>,
)

// const rootNode = document.getElementById('root')
// const root = ReactDOM.createRoot(rootNode)
// root.render(<App/>)