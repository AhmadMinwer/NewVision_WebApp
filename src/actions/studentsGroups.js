import { showLoading, hideLoading } from 'react-redux-loading'
import { addStudentGroupAPI, removeStudentGroupAPI, updateStudentGroupAPI, fetchStudentGroupAPI } from '../utils/APIs'

export const ADD_STUDENT_GROUP_LINK = 'ADD_STUDENT_GROUP'
export const REMOVE_STUDENT_GROUP = 'REMOVE_STUDENT_GROUP'
export const UPDATE_STUDENT_GROUP_LINK = 'UPDATE_STUDENT_GROUP'
export const RECEIVE_STUDENT_GROUP_LINKS = 'RECEIVE_STUDENT_GROUP_LINKS'
export const RECEIVE_STUDENT_GROUP_LINK = 'RECEIVE_STUDENT_GROUP'

//add attendance action 


export function addStudentGroup(link) {
    return {
        type: ADD_STUDENT_GROUP_LINK,
        link,
    }
}


export function handleAddStudentGroup(data) {
    return (dispatch) => {
        dispatch(showLoading())

        return addStudentGroupAPI(data)
            .then((data) => dispatch(addStudentGroup(data)))
            .then((action) => {
                dispatch(hideLoading())
                return action.link
            })
    }
}


export function removeStudentGroup(ids){
    return {
        type: REMOVE_STUDENT_GROUP,
        ids,
    }
}

export function updateStudentGroup(data){
    return{
        type: UPDATE_STUDENT_GROUP_LINK,
        data,
    }
}

export function handleUpdateStudentGroup(data) {
    return (dispatch) => {
        dispatch(showLoading())

        return updateStudentGroupAPI(data)
            .then((data) => dispatch(updateStudentGroup(data)))
            .then((action) => {
                dispatch(hideLoading())
                return action.data
            })
    }
}

export function handleRemoveStudentGroup(ids){
    return (dispatch) => {
        dispatch(showLoading())

        return removeStudentGroupAPI(ids)
            .then((ids) => dispatch(removeStudentGroup(ids)))
            .then(() => dispatch(hideLoading())
            )
    }
}



export function receiveStudentGroupLinks(links) {
    return {
        type: RECEIVE_STUDENT_GROUP_LINKS,
        links,
    }
}

export function handleFetchStudentGroup(filters){
    return () => {
        return fetchStudentGroupAPI(filters)
        .then((results)=> {

            console.log('results of handleFetchStudentGroup = ',results)
            return results
        })
    }
}


// export function receiveGroupId(id) {
//     return {
//         type: RECEIVE_GROUP,
//         id,
//     }
// }
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


// export function updateGroup(group) {
//     return {
//         type: UPDATE_GROUP,
//         group
//     }
// }

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