import React from 'react'
import { Provider } from 'react-redux'
import Board from './board'
import createStore from '../state/createStore'

const store = createStore()

const Mastermind = () => (
  <Provider store={store}>
    <Board />
  </Provider>
)

export default Mastermind
