import { ADD_GROUP, UPDATE_GROUP, RECEIVE_GROUP, RECEIVE_GROUPS } from '../actions/groups'
// import { stat } from 'fs';

export default function groups(state = {}, action) {
    switch (action.type) {
        case ADD_GROUP:

        case UPDATE_GROUP:
            
        console.log('from Groups reducer data= ', action.data)

            let updatedGroup = Object.values(state).filter((group)=>(group.id == action.data.groupId))[0]
            updatedGroup[action.data.type] = action.data.value
            const filteredGroups = Object.assign({},Object.values(state).filter((group)=>(group.id != action.data.groupId)))

            console.log('updatedGroup = ',updatedGroup)
            return {
                ...filteredGroups,
                updatedGroup,
            }
        case RECEIVE_GROUP:
            return {
                ...state,
                ...action.groups
            }
        case RECEIVE_GROUPS:
            return {
                // ...state,
                ...action.groups
            }
        default:
            return state
    }
}