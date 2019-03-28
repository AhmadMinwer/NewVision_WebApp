import { ADD_GROUP, UPDATE_GROUP, RECEIVE_GROUP, RECEIVE_GROUPS } from '../actions/groups'

export default function groups(state = {}, action) {
    switch (action.type) {
        case ADD_GROUP:

        case UPDATE_GROUP:

        case RECEIVE_GROUP:
            return {
                ...state,
                ...action.groups
            }
        case RECEIVE_GROUPS:
            return {
                ...state,
                ...action.groups
            }
        default:
            return state
    }
}