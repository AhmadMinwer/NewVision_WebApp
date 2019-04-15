export const ADD_SETTINGS = 'ADD_SETTINGS'
export const RECEIVE_SETTINGS = 'RECEIVE_SETTINGS'


export function addSettings(title, value ) {
    return {
        type: ADD_SETTINGS,
        title,
        value,
    }
}

export function receiveSettings(settings) {
    return {
        type: RECEIVE_SETTINGS,
        settings,
    }
}