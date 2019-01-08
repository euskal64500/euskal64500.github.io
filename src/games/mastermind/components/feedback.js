import React from 'react'
import PropTypes from 'prop-types'

const Feedback = ({ pegIds, colors }) => <View />

Feedback.defaultProps = { pegIds: [1, 2, 3, 4], colors: ['', '', '', ''] }

Feedback.propTypes = { pegIds: PropTypes.array, colors: PropTypes.array }

export default Feedback
