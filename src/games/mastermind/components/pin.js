/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import PropTypes from 'prop-types'
import style from '../styles/pin.module.css'

const getColorStyle = color => {
  const colorStyles = {
    black: style.black,
    ivory: style.ivory,
    gold: style.gold,
    orange: style.orange,
    pink: style.pink,
    tomato: style.tomato,
    gray: style.gray,
    green: style.green,
    yellow: style.yellow,
    blue: style.blue,
    brown: style.brown,
    transparent: style.transparent,
  }

  return colorStyles[color] || colorStyles.transparent
}

const getSizeStyle = size => (size === 'small' ? style.small : style.large)

const getBorderStyle = visible => (visible ? style.grayBorder : style.noBorder)

const Pin = ({ id, size, color, border, onPress }) => (
  <button
    id={id}
    type="submit"
    onClick={onPress ? () => onPress(id) : null}
    className={[
      getSizeStyle(size),
      getColorStyle(color),
      getBorderStyle(border),
    ].join(' ')}
  />
)

Pin.defaultProps = {
  size: 'small',
  color: 'transparent',
  border: true,
  onPress: null,
}

Pin.propTypes = {
  id: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
  color: PropTypes.string,
  border: PropTypes.bool,
  onPress: PropTypes.func,
}

export default Pin
