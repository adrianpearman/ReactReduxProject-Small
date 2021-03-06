// Using this component to connect the redux store to the client side components
import { bindActionCreators } from 'redux'
// redux middleware for connecting the store to the components
import { connect } from 'react-redux'
import * as actionCreators from '../redux/actions/businessActions'
import Root from './Root'

// returns the state from the store and provides it as props to the components
function mapStateToProps(state) {
  return {
    businessDetails: state.businessData.businessDetails,
  }
}

// returns all of the actions to the components
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

// the middleware used to pass in all of the store state and store functions to the component
const App = connect(mapStateToProps, mapDispatchToProps)(Root)

export default App