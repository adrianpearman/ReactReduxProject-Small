import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Business from './Business'

const Root = ({store}) => {
  return(
    <Provider store={store}>
      <Business {...store} />
    </Provider>    
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root