import { createStore as reduxCreateStore } from 'redux'
import { mastermind, enableBatching } from './reducers'

const createStore = () => reduxCreateStore(enableBatching(mastermind))
export default createStore
