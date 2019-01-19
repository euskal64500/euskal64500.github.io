import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nextPegColor } from '../state/actions'
import Round from '../components/round'

const mapStateToProps = (state, ownProps) => {
  const ids = state.guesses[ownProps.row].pegs
  const colors = ids.map(id => state.pegs[id].color)
  return {
    ids,
    colors,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onPress: id => nextPegColor(id) }, dispatch)

const RoundContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Round)

export default RoundContainer
