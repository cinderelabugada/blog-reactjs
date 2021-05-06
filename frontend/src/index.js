import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'

import store from './redux/store'

/**
 * Inclui o elemento base do projeto no documento html
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

