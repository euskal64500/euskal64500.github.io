import React from 'react'
import boardStyle from '../styles/board.module.css'
import FeedbackListContainer from '../containers/feedback-list-container'
import GuessListContainer from '../containers/guess-list-container'
import ShieldContainer from '../containers/shield-container'

const Board = () => (
  <div className={boardStyle.board}>
    <div className={boardStyle.play}>
      <div className={boardStyle.feedback}>
        <FeedbackListContainer />
      </div>
      <div className={boardStyle.guess}>
        <GuessListContainer />
      </div>
    </div>
    <div className={boardStyle.solution}>
      <div className={boardStyle.empty} />
      <div className={boardStyle.shield}>
        <ShieldContainer />
      </div>
    </div>
  </div>
)

export default Board
