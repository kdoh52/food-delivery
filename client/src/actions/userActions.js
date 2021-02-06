import { FETCH_USERS, NEW_USER } from './types'
import API from '../utils/API'

export function fetchUsers() {
    console.log('fetching')
    return function(dispatch) {
        API.getUsers()
        // .then(res => res.json())
        .then(res => dispatch({
            type: FETCH_USERS,
            payload: res
        }))
    }
}