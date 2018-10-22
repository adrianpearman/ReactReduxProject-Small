import { combineReducers } from "redux";

import businessData from './businessReducer'

export default combineReducers({
  businessData: businessData
})