import {
    _getStudents,
    _getGroups,
    _getSettings,
    _getQueries,
} from './_DATA.js';

export function getInitialData() {
    return Promise.all([
        _getStudents(),
        _getGroups(),
        fetch("http://localhost:9000/settings") //fetch settings
            .then(res => res.json())
            .then(json => json),
        _getQueries(),
    ]).then(function ([students, groups, settings, queries]) {
        return {
            students,
            groups,
            settings,
            queries,
        };
    });
};


export function addStudentAPI(student) {
    console.log('addStudentApi', student)
    return fetch('http://localhost:9000/students/api/v1/students/add', {
        method: 'POST',
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            student,
        })
    })
}


export function addGroupAPI(group) {
    console.log('addGroupApi', group)
    return fetch('http://localhost:9000/groups/api/v1/groups/add', {
        method: 'POST',
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            group,
        })
    })
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

