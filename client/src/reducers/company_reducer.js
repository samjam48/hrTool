import { FETCH_COMPANIES, CREATE_COMPANY, UPDATE_COMPANY, DELETE_COMPANY } from '../actions/company_actions'



export default function (state = {}, action) {

    switch (action.type) {
        // case FETCH_COMPANIES:
        //     return action.payload
        case CREATE_COMPANY:
            let id = action.payload._id
            return { ...state, [id]: action.payload }
        case UPDATE_COMPANY:
            return action.payload
        case DELETE_COMPANY:
            let newState = (JSON.parse(JSON.stringify(state)))
            delete newState[action.payload]
            return newState
        default:
        // return state
    }

    return state
}