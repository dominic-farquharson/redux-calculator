import { connect} from 'react-redux';
import Body from '../Body';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';



function mapStateToProps(state) {
  console.log('state now', state)
  return {
    total: state.calculator.total
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // for convienence
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

// oassed in first arg - subscribing to store + have access to dispatch
export default connect(mapStateToProps, mapDispatchToProps)(Body);
