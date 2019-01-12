/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import PropTypes from 'prop-types'
import style from '../styles/peg.module.css'

// color scheme: http://www.creativecolorschemes.com/resources/free-color-schemes/earth-tone-color-scheme.shtml
const pegColors = {
  brown: 'brown', // '#B99C6B'
  blue: 'lightblue',
  yellow: 'lightyellow',
  green: 'lightgreen',
  gray: 'gray',
  red: 'tomato',
  white: 'white',
  black: 'black',
  pink: 'hotpink',
  orange: 'orange',
  gold: 'gold',
  ivory: 'ivory',
  transparent: 'transparent',
}

// eslint-disable-next-line object-curly-newline
const Peg = ({ id, bgColor, size, enable, onPress }) => (
  <div className={style.container}>
    <button
      id={id}
      type="submit"
      onClick={onPress || null}
      disabled={!enable}
      className={style.green}
    />
  </div>
)

Peg.propTypes = {
  id: PropTypes.number.isRequired,
  bgColor: PropTypes.oneOf(Object.keys(pegColors)),
  enable: PropTypes.bool,
  size: PropTypes.oneOf('large', 'small'),
  onPress: PropTypes.func,
}

Peg.defaultProps = {
  enable: false,
  bgColor: 'green',
  size: 'large',
  onPress: null,
}

export default Peg
