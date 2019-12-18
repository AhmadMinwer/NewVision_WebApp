import { showLoading, hideLoading } from 'react-redux-loading'
import { addStudentAPI, fetchStudentAPI, searchStudentAPI, updateStudentAPI } from '../utils/APIs'

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


// student = {
//     id,
//     name,
//     CPA,
//     creationDate,
//     specialty,
//     CPABalance,
//     terms,
//     remarks,
//     phone1,
//     phone2,
//     status,
//     lastLevel,
//     lastDate,
//     certificationStatus
// }


export function handleAddStudent(student) {
    return (dispatch) => {
        dispatch(showLoading())

        //update student here and generate id
        let formatedStudent = {
            name: student.name,
            phone1: student.phone,
            phone2: student.phone2,
            specialty: student.specialty,
            remarks: student.remarks,
            terms: student.terms,
            CPA: student.CPAID,
        }
        return addStudentAPI(formatedStudent)
            .then((student) => dispatch(addStudent(student)))
            .then((action) => {
                dispatch(hideLoading())
                return action.student
            })
    }
}

export function handleFetchStudents(filters){
    return () => {
        return fetchStudentAPI(filters)
        .then((results)=> {

            console.log('results of handleFetchStudents = ',results)
            return results
        })
    }
}

export function handleSearchStudents(filters){
    return () => {
        return searchStudentAPI(filters)
        .then((results)=> {

            console.log('results of handleFetchStudents = ',results)
            return results
        })
    }
}

//you need 2 action creators => you need one for fillters and one as default for active students
export function receiveStudents(students) {
    return {
        type: RECEIVE_STUDENTS,
        students,
    }
}
export function receiveStudentId(id) {
    return {
        type: RECEIVE_STUDENT,
        id,
    }
}


export function updateStudent(data){
    return{
        type: UPDATE_STUDENT,
        data,
    }
}

export function handleUpdateStudent(data) {
    console.log('from Students handleUpdateStudent',data)
    return (dispatch) => {
        dispatch(showLoading())

        return updateStudentAPI(data)
            .then((data) => dispatch(updateStudent(data)))
            .then((action) => {
                dispatch(hideLoading())
                return action.data
            })
    }
}