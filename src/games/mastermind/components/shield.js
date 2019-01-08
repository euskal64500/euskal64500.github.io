/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import PropTypes from 'prop-types'
import style from '../styles/shield.module.css'

const Shield = ({ open, code, onUnlock }) => (
  <div className={style.container}>
    {code.map(color => (
      <p>{color}</p>
    ))}
    <p>{open ? 'true' : 'false'}</p>
    <button type="button" onClick={onUnlock}>
      dummy
    </button>
  </div>
)

Shield.defaultProps = {
  open: false,
  code: ['', '', '', ''],
  onUnlock: null,
}

Shield.propTypes = {
  open: PropTypes.bool,
  code: PropTypes.arrayOf(PropTypes.string),
  onUnlock: PropTypes.func,
}

export default Shield
