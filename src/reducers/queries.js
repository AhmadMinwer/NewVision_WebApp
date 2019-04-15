import { ADD_QUERY, RECEIVE_QUERIES } from '../actions/queries'

export default function queries(state = {}, action) {
    switch (action.type) {
        case ADD_QUERY:

        case RECEIVE_QUERIES:
            return {
                ...state,
                ...action.queries
            }
        default:
            return state
    }
}