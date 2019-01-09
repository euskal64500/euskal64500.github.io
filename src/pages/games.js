import React from 'react'
import SEO from '../components/seo'
import Mastermind from '../games/mastermind/components/mastermind'
import gameStyle from '../styles/game.module.css'

const GamePage = () => (
  <div className={gameStyle.container}>
    <SEO title="Mastermind" />
    <Mastermind />
  </div>
)

export default GamePage
