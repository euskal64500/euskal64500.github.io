import React from 'react'
import PropTypes from 'prop-types'
import Pin from './pin'
import style from '../styles/round.module.css'

const Round = props => {
  const {
    ids: [i1, i2, i3, i4],
    colors: [c1, c2, c3, c4],
    onPress,
  } = props

  return (
    <div className={style.container}>
      <Pin size="large" color={c1} id={i1} onPress={onPress} />
      <Pin size="large" color={c2} id={i2} onPress={onPress} />
      <Pin size="large" color={c3} id={i3} onPress={onPress} />
      <Pin size="large" color={c4} id={i4} onPress={onPress} />
    </div>
  )
}

Round.defaultProps = {}

Round.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onPress: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Round
