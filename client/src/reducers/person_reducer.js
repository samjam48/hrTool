import { FETCH_PERSONS, CREATE_PERSON, UPDATE_PERSON, DELETE_PERSON } from '../actions/person_actions'




export default function(state = {}, action) {
    // console.log('---------------------')
    // console.log('reducer action.type = ')
    // console.log(action.type)
    // console.log('---------------------')
    // console.log('reducer action.payload = ')
    // console.log(action.payload)
    
    switch(action.type) {      
        // case FETCH_PERSONS:
        //     return action.payload
        case CREATE_PERSON:
            let id = action.payload._id
            return { ...state, [id]: action.payload }
        case UPDATE_PERSON:
            return action.payload   
        case DELETE_PERSON:
            let newState = (JSON.parse(JSON.stringify(state)))
            delete newState[action.payload]
            return newState
        default:
            return state
    }

    return state
}

        // case FETCH_PERSONS:
        //     // console.log('---------fetch_persons------------')
        //     // console.log(state)
        //     return { ...state, all: action.payload }