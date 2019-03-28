import { getInitialData } from '../utils/APIs'
import { receiveStudents } from './students'
import { receiveGroups } from './groups'
import { showLoading, hideLoading } from 'react-redux-loading'


export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ students, groups }) => {
        dispatch(receiveStudents(students))
        dispatch(receiveGroups(groups))
        dispatch(hideLoading())
      })
    }
}