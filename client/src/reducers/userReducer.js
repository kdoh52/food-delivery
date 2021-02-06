import { FETCH_USERS, NEW_USER } from '../actions/types'

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_USERS:
            console.log('reducing')
            console.log('payload', action.payload)
            return {
                ...state,
                items: action.payload.data
            }
        default:
            return state;
    }
}