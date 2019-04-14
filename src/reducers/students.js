import { ADD_STUDENT, RECEIVE_STUDENT, RECEIVE_STUDENTS, UPDATE_STUDENT } from '../actions/students'

export default function students(state = {}, action) {
    switch (action.type) {
        case ADD_STUDENT:
            return {
                ...state,
                [action.sutdent.id]: {
                    ...state[action.sutdent],
                }
            }
        case RECEIVE_STUDENTS:
            return {
                ...state,
                ...action.students
            }
        case RECEIVE_STUDENT:
            // TODO: modify it to return single student by his/her id
            return {
                ...state,
                ...action.students
            }
        case UPDATE_STUDENT:
            return {
                ...state,
                [action.student.id]: {
                    // TODO: modify it to edit changed values  
                }
            }
        default:
            return state

    }
}