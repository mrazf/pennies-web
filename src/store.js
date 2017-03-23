import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import pennies from './app-reducers'

const configureStore = () => {
  return createStore(
    pennies,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware, createLogger({ level: 'info' }))
    )
  )
}

export default configureStore
