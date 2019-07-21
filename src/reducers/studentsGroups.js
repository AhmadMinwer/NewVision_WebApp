import { ADD_STUDENT_GROUP_LINK, UPDATE_STUDENT_GROUP_LINK, RECEIVE_STUDENT_GROUP_LINKS, REMOVE_STUDENT_GROUP, RECEIVE_STUDENT_GROUP_LINK } from '../actions/studentsGroups'

export default function studentsGroups(state = {}, action) {
    switch (action.type) {
        case ADD_STUDENT_GROUP_LINK:
        return {
            ...state,
            [action.link.groupId]: action.link,
        }
        
        case REMOVE_STUDENT_GROUP:
            const fire = Object.assign({},Object.values(state).filter((link)=> ((link.studentId !== action.ids.studentId) || (link.groupId !== action.ids.groupId)))) 
            return {
                ...fire     
            }

        case UPDATE_STUDENT_GROUP_LINK:
            return {
                ...state,
                ...action.groups
            }
        case RECEIVE_STUDENT_GROUP_LINKS:
            return {
                ...state,
                ...action.links
            }
        default:
            return state
    }
}