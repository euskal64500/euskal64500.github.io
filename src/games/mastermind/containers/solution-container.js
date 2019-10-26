import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onUnlock } from '../state/actions'
import Solution from '../components/solution'

const mapStateToProps = state => ({
  open: state.solution.open,
  code: state.solution.code,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onUnlock }, dispatch)

const SolutionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Solution)

export default SolutionContainer
