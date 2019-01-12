import React from 'react'
import PropTypes from 'prop-types'
import GuessContainer from '../containers/guess-container'
import style from '../styles/guess-list.module.css'

const GuessList = ({ ids }) => (
  <div className={style.container}>
    {ids.map(id => (
      <GuessContainer key={id} id={id} />
    ))}
  </div>
)

GuessList.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.number),
}

GuessList.defaultProps = { ids: [1, 1, 1, 1] }

export default GuessList
