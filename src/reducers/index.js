import { combineReducers } from 'redux'
import students from './students'
import groups from './groups'
import settings from './settings'
import queries from './queries'
import studentsGroups from './studentsGroups'

import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    students,
    groups,
    studentsGroups,
    settings,
    queries,
  loadingBar: loadingBarReducer,
})