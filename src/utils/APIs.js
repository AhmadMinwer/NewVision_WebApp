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
        _getSettings(),
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

