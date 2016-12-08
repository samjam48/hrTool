import { FETCH_PERSONS, FETCH_PERSON, CREATE_PERSON, UPDATE_PERSON, DELETE_PERSON } from '../actions/types'



function newObjectKey (state){

    var size = Object.keys(state).length
    console.log(size)
    var id = Object.keys(state)[size-1]
    console.log(id)

    return id + 1
}



export default function(state = {}, action) {
    console.log('---------------------')
    console.log('reducer action.type = ')
    console.log(action.type)
    
    switch(action.type) {
        case CREATE_PERSON:
            return { ...state, [newObjectKey(state)]:  action.data }
        case FETCH_PERSON:
            return { ...state, Person: action.data }
        case FETCH_PERSONS:
            console.log('---------fetch_persons------------')
            console.log(state)
            return { ...state, all: action.data }
        // case UPDATE_PERSON:
        //     return { ...state, all: action.payload.data }
        // case DELETE_PERSON:
        //     return { ...state, all: action.payload.data }
        default:
            return state
    }
}