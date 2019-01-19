import React from 'react'
import PropTypes from 'prop-types'
import Pin from './pin'
import style from '../styles/result.module.css'

const Result = props => {
  const {
    ids: [i11, i12, i21, i22],
    colors: [c11, c12, c21, c22],
  } = props

  return (
    <div className={style.container}>
      <div className={style.grid}>
        <Pin size="small" color={c11} id={i11} />
        <Pin size="small" color={c12} id={i12} />
        <Pin size="small" color={c21} id={i21} />
        <Pin size="small" color={c22} id={i22} />
      </div>
    </div>
  )
}

Result.defaultProps = {}

Result.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Result
