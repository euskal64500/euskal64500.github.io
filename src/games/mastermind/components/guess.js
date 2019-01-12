/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import PropTypes from 'prop-types'
import GuessPegContainer from '../containers/guess-peg-container'
import style from '../styles/guess.module.css'

const Guess = ({ pegIds, focused }) => (
  <div className={style.container}>
    <GuessPegContainer id={pegIds[0]} />
    <GuessPegContainer id={pegIds[1]} />
    <GuessPegContainer id={pegIds[2]} />
    <GuessPegContainer id={pegIds[3]} />
  </div>
)

Guess.defaultProps = { pegIds: [1, 2, 3, 4], focused: false }

Guess.propTypes = {
  pegIds: PropTypes.arrayOf(PropTypes.number),
  focused: PropTypes.bool,
}

export default Guess
