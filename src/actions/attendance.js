import { showLoading, hideLoading } from 'react-redux-loading'
import { addAttendanceAPI, updateAttendanceAPI } from '../utils/APIs'
import Attendance from '../components/Attendance';

export const ADD_ATTENDANCE = 'ADD_ATTENDANCE'
export const UPDATE_ATTENDANCE = 'UPDATE_ATTENDANCE'
export const RECEIVE_ATTENDANCES = 'RECEIVE_ATTENDANCES'
export const RECEIVE_ATTENDANCE = 'RECEIVE_ATTENDANCE'




export function addAttendance(attendanceDay) {
    return {
        type: ADD_ATTENDANCE,
        attendanceDay,
    }
}

export function handleAddAttendance(attendanceDay) {
    return (dispatch) => {
        dispatch(showLoading())

        
        return addAttendanceAPI(attendanceDay)  // check the returned value
            .then((attendanceDay) => dispatch(addAttendance(attendanceDay)))
            .then((action)=> {
                dispatch(hideLoading())
                return action.attendance
            })
    }
}

export function receiveAttendances(attendance) {
    return {
        type: RECEIVE_ATTENDANCES,
        attendance,
    }
}

export function receiveAttendanceId(id) {
    return {
        type: RECEIVE_ATTENDANCE,
        id,
    }
}


export function updateAttendance(data){
    return{
        type: UPDATE_ATTENDANCE,
        data,
    }
}

export function handleUpdateAttendance(data) {
    return (dispatch) => {
        dispatch(showLoading())

        return updateAttendanceAPI(data)
            .then((data) => dispatch(updateAttendance(data)))
            .then((action) => {
                dispatch(hideLoading())
                return action.data
            })
    }
}