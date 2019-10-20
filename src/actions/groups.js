import { showLoading, hideLoading } from 'react-redux-loading'
import { addGroupAPI, updateGroupAPI } from '../utils/APIs'

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

export function handleAddGroup(group) {
    return (dispatch) => {
        dispatch(showLoading())

        //update group here 
        let formatedGroup = {
            name: group.name,
            startingDate: group.startingDate,
            finishingDate: group.finishingDate,
            level: group.level,
            time: group.time,
            status: group.status,
            numberOfLessons: group.numberOfLessons,
            remarks: group.remarks,
            teacher1: group.teacher1,
            teacher2: group.teacher2,
        }
        return addGroupAPI(formatedGroup)
            .then((group) => dispatch(addGroup(group)))
            .then((action)=> {
                dispatch(hideLoading())
                return action.group
            })
    }
}

export function receiveGroups(groups) {
    return {
        type: RECEIVE_GROUPS,
        groups,
    }
}

export function receiveGroupId(id) {
    return {
        type: RECEIVE_GROUP,
        id,
    }
}


export function updateGroup(data){
    console.log('updateGroup groups actions data = ',data)
    return{
        type: UPDATE_GROUP,
        data,
    }
}

export function handleUpdateGroup(data) {
    return (dispatch) => {
        dispatch(showLoading())

        return updateGroupAPI(data)
            .then((data) => dispatch(updateGroup(data)))
            .then((action) => {
                dispatch(hideLoading())
                return action.data
            })
    }
}