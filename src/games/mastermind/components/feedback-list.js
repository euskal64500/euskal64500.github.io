/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import PropTypes from 'prop-types'
import style from '../styles/feedback-list.module.css'

const FeedbackList = ({ ids }) => (
  <div className={style.container}>
    {ids.map(id => (
      <p>{id}</p>
    ))}
  </div>
)

FeedbackList.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.number),
}

FeedbackList.defaultProps = { ids: [1, 1, 1, 1] }

export default FeedbackList
