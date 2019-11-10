import {
    _getStudents,
    _getGroups,
    _getSettings,
    _getQueries,
} from './_DATA.js';
import { API } from '../config.js';

export async function getInitialData() {
    return await Promise.all([
        fetch(`${API}/students/api/v1/students/active`) //fetch active students
        .then(res => res.json())
        .then(json => json.results),

        fetch(`${API}/groups/active_potential/fetch/`) //fetch groups
        .then(res => res.json())
        .then(json => json.results),

        fetch(`${API}/settings`) //fetch settings
            .then(res => res.json()),


        fetch(`${API}/studentsGroups/active_potential/fetch/`)  //fetch student group links
            .then(res => res.json())
            .then(json => {
                return json.results
            }),

        _getQueries(),
    ]).then(function ([students, groups, settings, links, queries]) {
        return {
            students,
            groups,
            settings,
            links,
            queries,
        };
    });
};


export function addStudentAPI(student) {

    return fetch(`${API}/students/api/v1/students/add`, {
        method: 'POST',
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            student,
        })
    }).then(response => response.json())
        .then(body => body.student)
}

export function addStudentGroupAPI(link) {
    return fetch(`${API}/studentsGroups/api/v1/add`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            link,
        })
    }).then(response => {
        
        console.log('blabla', response)
        return response.json()
    })
        .then(body => body.link)
}

export function removeStudentGroupAPI(ids){ 
    return fetch(`${API}/studentsGroups/api/v1/remove`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ids,
        })
    }).then(response => response.json())
        .then(json => {
            return json.ids
        })
}

// 
export function updateStudentGroupAPI(data){  
    return fetch(`${API}/studentsGroups/api/v1/update`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            data,
        })
    }).then(response => response.json())
        .then(json => {
            return json.data
        })
}


export function updateGroupAPI(data){
    return fetch(`${API}/groups/api/v1/update`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            data,
        })
    }).then(response => response.json())
        .then(json => {
            return json.data
        })
}


export function fetchStudentAPI(filters) {
    return fetch(`${API}/students/api/v1/students/fetch`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            filters,
        })
    }).then(response => response.json())
        .then(body => body.results)
}



export function addGroupAPI(group) {

    return fetch(`${API}/groups/api/v1/groups/add`, {
        method: 'POST',
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            group,
        })
    }).then(response => response.json())
        .then(body => body.group)
}



// import { students, groups } from './_DATA'


// export function generateUID() {
//     return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
// }


// export function _getStudents() {
//     return new Promise((res, rej) => {
//         setTimeout(() => res({ ...students }), 1000)
//     })
// }

// export function _getGroups() {
//     return new Promise((res, rej) => {
//         setTimeout(() => res({ ...groups }), 1000)
//     })
// }

// export function getInitialData() {
//     return Promise.all([
//         _getStudents(),
//         _getGroups(),
//     ]).then(function ([students, groups]) {
//         return {
//             students,
//             groups,
//         };
//     });
// }

