import { connect } from 'react-redux'
import Result from '../components/result'

const mapStateToProps = (state, ownProps) => {
  const ids = state.feedbacks[ownProps.row].pegs
  const colors = ids.map(id => state.pegs[id].color)
  return {
    ids,
    colors,
  }
}

const ResultContainer = connect(
  mapStateToProps,
  null
)(Result)

export default ResultContainer
