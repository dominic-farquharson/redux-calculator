import { connect} from 'react-redux';
import Body from '../Body';



function mapStateToProps(state) {
  return {
    total: state.calculator.total
  }
}

// oassed in first arg - subscribing to store + have access to dispatch
export default connect(mapStateToProps)(Body);
