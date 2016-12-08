import { FETCH_PERSONS, FETCH_PERSON, CREATE_PERSON, UPDATE_PERSON, DELETE_PERSON } from '../actions/person_actions'



function newObjectKey (state){
    return Object.keys(state).length
}



export default function(state = {}, action) {
    console.log('---------------------')
    console.log('reducer action.type = ')
    console.log(action.type)
    console.log('---------------------')
    console.log('reducer action.payload = ')
    console.log(action.payload)
    
    switch(action.type) {
        case CREATE_PERSON:
            action.payload.id = newObjectKey(state)
            return { ...state, [newObjectKey(state)]: action.payload }
        case FETCH_PERSON:
            return { ...state, Person: action.payload }
        case FETCH_PERSONS:
            console.log('---------fetch_persons------------')
            console.log(state)
            return { ...state, all: action.payload }
        // case UPDATE_PERSON:
        //     return { ...state, all: action.payload.data }
        // case DELETE_PERSON:
        //     return { ...state, all: action.payload.data }
        default:
            return state
    }

    return state
}