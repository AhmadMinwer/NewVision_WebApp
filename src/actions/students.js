import { showLoading, hideLoading } from 'react-redux-loading'

export const ADD_STUDENT = 'ADD_STUDENT'
export const UPDATE_STUDENT = 'UPDATE_STUDENT'
export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS'
export const RECEIVE_STUDENT = 'RECEIVE_STUDENT'




export function addStudent(student) {
    return {
        type: ADD_STUDENT,
        student,
    }
}


export function receiveStudents(query) {
    return {
        type: RECEIVE_STUDENTS,
        query,
    }
}
export function receiveStudentId(id) {
    return {
        type: RECEIVE_STUDENT,
        id,
    }
}
//student  => {id, name, CPA, creationDate, specialty, CPABalance, terms, remarks, phone1, phone2, status, lastLevel, lastDate, certificationStatus}
// export function handleAddStudent(student) {
//     return (dispatch) => {
//         dispatch(showLoading())

//         //update student here and generate id
//         return addStudentAPI(student)
//             .then((student) => dispatch(addStudent(student)))
//             .then(() => dispatch(hideLoading()))
//     }
// }


export function updateStudent(student) {
    return {
        type: UPDATE_STUDENT,
        student
    }
}

// export function handleUpdateStudent(info) {
//     return (dispatch) => {
//         dispatch(updateStudent(info))

//         return updateStudentAPI(info)
//             .catch((e) => {
//                 console.warn('Error in updating a student: ', e)
//                 dispatch(updateStudent(info))
//                 alert('There was an error in updating a student. Try again.')
//             })
//     }
// }