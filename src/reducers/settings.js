import { ADD_SETTINGS, RECEIVE_SETTINGS } from '../actions/settings'

export default function settings(state = {}, action) {
    switch (action.type) {
        case ADD_SETTINGS:

        case RECEIVE_SETTINGS:
            return {
                ...state,
                ...action.settings
            }
        default:
            return state
    }
}