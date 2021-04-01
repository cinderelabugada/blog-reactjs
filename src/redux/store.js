import {
  createStore,
  applyMiddleware
} from 'redux'
// para actions que retornam Promises
import thunk from 'redux-thunk'

// para logar todas as actions
import logger from 'redux-logger'

import reducers from './reducers'

const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore(
  reducers, applyMiddleware(...middlewares)
)

export default store

