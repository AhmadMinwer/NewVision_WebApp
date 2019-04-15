import { getInitialData } from '../utils/APIs'
import { receiveStudents } from './students'
import { receiveGroups } from './groups'
import { receiveSettings } from './settings'
import { receiveQueries } from './queries'
import { showLoading, hideLoading } from 'react-redux-loading'


export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ students, groups, settings, queries }) => {
        dispatch(receiveStudents(students))
        dispatch(receiveGroups(groups))
        dispatch(receiveSettings(settings))
        dispatch(receiveQueries(queries))
        dispatch(hideLoading())
      })
    }
}