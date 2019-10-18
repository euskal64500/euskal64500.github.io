/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// Changing icon size: https://github.com/react-icons/react-icons/issues/67

import React from 'react'
import PropTypes from 'prop-types'
import { FaLock } from 'react-icons/fa'
import Pin from './pin'
import style from '../styles/solution.module.css'

const Solution = ({ open, code, onUnlock }) => {
  const [c1, c2, c3, c4] = code

  if (open) {
    return (
      <div className={style.container}>
        <Pin size="large" color={c1} id="solution_1" />
        <Pin size="large" color={c2} id="solution_2" />
        <Pin size="large" color={c3} id="solution_3" />
        <Pin size="large" color={c4} id="solution_4" />
      </div>
    )
  }

  return (
    <div className={style.container}>
      <button type="submit" onClick={onUnlock} className={style.lock}>
        <FaLock size={32} />
      </button>
    </div>
  )
}

Solution.defaultProps = {
  open: false,
  code: ['', '', '', ''],
  onUnlock: null,
}

Solution.propTypes = {
  open: PropTypes.bool,
  code: PropTypes.arrayOf(PropTypes.string),
  onUnlock: PropTypes.func,
}

export default Solution
