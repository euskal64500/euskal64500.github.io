import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SEO from '../components/seo'
import gameStyle from '../styles/game.module.css'

const Counter = ({ count, increment }) => (
  <div>
    <p>
      Count:
      {count}
    </p>
    <button type="submit" onClick={increment}>
      Increment
    </button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
}

const mapStateToProps = ({ count }) => ({ count })

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: `INCREMENT` }),
})

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

const GamePage = () => (
  <div className={gameStyle.container}>
    <SEO title="Mastermind" />
    <ConnectedCounter />
  </div>
)

export default GamePage
