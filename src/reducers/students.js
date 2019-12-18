import { ADD_STUDENT, RECEIVE_STUDENT, RECEIVE_STUDENTS, UPDATE_STUDENT } from '../actions/students'

export default function students(state = {}, action) {
    switch (action.type) {
        case ADD_STUDENT:
            return {
                ...state,
                [action.student.id]: action.student,
            }
        case RECEIVE_STUDENTS:
            return {
                // ...state,
                ...action.students
            }
        case RECEIVE_STUDENT:
            // TODO: modify it to return single student by his/her id
            return {
                ...state,
                ...action.students
            }

        case UPDATE_STUDENT:

            console.log('from Students reducer data= ', action.data)

            let updatedStudent = Object.values(state).filter((student) => (student.id == action.data.studentId))[0]
            updatedStudent[action.data.type] = action.data.value
            const filteredStudents = Object.assign({}, Object.values(state).filter((student) => (student.id != action.data.studentId)))

            console.log('updatedStudent = ', updatedStudent)
            return {
                ...filteredStudents,
                updatedStudent,
            }
        default:
            return state

    }
}