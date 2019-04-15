import { combineReducers } from 'redux'
import students from './students'
import groups from './groups'
import settings from './settings'
import queries from './queries'

import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    students,
    groups,
    settings,
    queries,
  loadingBar: loadingBarReducer,
})