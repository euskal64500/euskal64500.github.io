import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { mastermind, enableBatching } from './reducers'

const createStore = () =>
  reduxCreateStore(enableBatching(mastermind), applyMiddleware(thunk))
export default createStore
