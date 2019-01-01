
import { createStore as reduxCreateStore } from "redux"
import { website } from './reducers'

const createStore = () => reduxCreateStore( website )
export default createStore
