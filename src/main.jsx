import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//Redux
import { Provider } from 'react-redux'
import store from './store'
//Router
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> 
      {/* HashRouter para trabajar como spa */}
      <Provider store={store}>
        {/* permite vincular el contexto con la store */}
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
)
