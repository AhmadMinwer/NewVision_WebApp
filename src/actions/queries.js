export const ADD_QUERY = 'ADD_QUEREY'
export const RECEIVE_QUERIES = 'RECEIVE_QUERIES'


export function addQuerey(query) {
    return {
        type: ADD_QUERY,
        query
    }
}

export function receiveQueries(queries) {
    return {
        type: RECEIVE_QUERIES,
        queries,
    }
}