import { combineReducers } from 'redux'
import students from './students'
import groups from './groups'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    students,
    groups,
  loadingBar: loadingBarReducer,
})