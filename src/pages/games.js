import React from 'react'
import SEO from '../components/seo'
import style from '../styles/game.module.css'
import MastermindGame from '../games/mastermind/components/mastermind'

const GamePage = () => (
  <div className={style.container}>
    <SEO title="Mastermind" />
    <MastermindGame />
  </div>
)

export default GamePage
