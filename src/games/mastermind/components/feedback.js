import React from 'react'
import PropTypes from 'prop-types'
import FeedbackPegContainer from '../containers/feedback-peg-container'
import style from '../styles/feedback.module.css'

const Feedback = ({ pegIds, colors }) => (
  <div className={style.column}>
    <div className={style.row}>
      <FeedbackPegContainer id={pegIds[0]} color={colors[0]} />
      <FeedbackPegContainer id={pegIds[1]} color={colors[1]} />
    </div>
    <div className={style.row}>
      <FeedbackPegContainer id={pegIds[0]} color={colors[2]} />
      <FeedbackPegContainer id={pegIds[1]} color={colors[3]} />
    </div>
  </div>
)

Feedback.propTypes = {
  pegIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Feedback.defaultProps = {}

export default Feedback
