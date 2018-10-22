import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducer from './reducers'

const defaultState = {}

const middleware = applyMiddleware(promise(), thunk, )

const store = createStore(
  reducer,
  defaultState,
  composeWithDevTools(
    middleware
  )
 )

export default store