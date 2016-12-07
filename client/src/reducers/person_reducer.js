import { FETCH_PERSONS, FETCH_PERSON, CREATE_PERSON } from '../actions/index'



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
            console.log(state)
            return { ...state, all: action.data }
        // case EDIT_PERSON:
        //     return { ...state, all: action.payload.data }
        default:
            return state
    }
}