import { showLoading, hideLoading } from 'react-redux-loading'
import { addStudentAPI } from '../utils/APIs'

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
            .then(() => dispatch(hideLoading()))
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