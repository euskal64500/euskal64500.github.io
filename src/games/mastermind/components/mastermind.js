import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../state/createStore'
import ResultContainer from '../containers/result-container'
import RoundContainer from '../containers/round-container'
import SolutionContainer from '../containers/solution-container'
import style from '../styles/mastermind.module.css'

const store = createStore()

const MastermindGame = () => (
  <Provider store={store}>
    <div className={style.container}>
      <ResultContainer row={1} />
      <RoundContainer row={1} />

      <ResultContainer row={2} />
      <RoundContainer row={2} />

      <ResultContainer row={3} />
      <RoundContainer row={3} />

      <ResultContainer row={4} />
      <RoundContainer row={4} />

      <ResultContainer row={5} />
      <RoundContainer row={5} />

      <ResultContainer row={6} />
      <RoundContainer row={6} />

      <ResultContainer row={7} />
      <RoundContainer row={7} />

      <ResultContainer row={8} />
      <RoundContainer row={8} />

      <p />
      <SolutionContainer />
    </div>
  </Provider>
)

export default MastermindGame
