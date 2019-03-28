import { showLoading, hideLoading } from 'react-redux-loading'

export const ADD_GROUP = 'ADD_GROUP'
export const UPDATE_GROUP = 'UPDATE_GROUP'
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS'
export const RECEIVE_GROUP = 'RECEIVE_GROUP'

//add attendance action 


export function addGroup(group) {
    return {
        type: ADD_GROUP,
        group,
    }
}

export function receiveGroups(query) {
    return {
        type: RECEIVE_GROUPS,
        query,
    }
}

export function receiveGroupId(id) {
    return {
        type: RECEIVE_GROUP,
        id,
    }
}
//group  => {}
// export function handleAddGroup(group) {
//     return (dispatch) => {
//         dispatch(showLoading())

//         //update group here and generate id
//         return saveGroup(group)
//             .then((group) => dispatch(addGroup(group)))
//             .then(() => dispatch(hideLoading()))
//     }
// }


export function updateGroup(group) {
    return {
        type: UPDATE_GROUP,
        group
    }
}

// export function handleUpdateGroup(info) {
//     return (dispatch) => {
//         dispatch(updateGroup(info))

//         return updateGroupAPI(info)
//             .catch((e) => {
//                 console.warn('Error in updating a Group: ', e)
//                 dispatch(updateGroup(info))
//                 alert('There was an error in updating a Group. Try again.')
//             })
//     }
// }