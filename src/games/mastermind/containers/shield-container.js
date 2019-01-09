import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onUnlock } from '../state/actions'
import Shield from '../components/shield'

const mapStateToProps = state => ({
  open: state.solution.open,
  code: state.solution.code,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onUnlock }, dispatch)

const ShieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Shield)

export default ShieldContainer
