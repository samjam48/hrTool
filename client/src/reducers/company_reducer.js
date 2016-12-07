import { FETCH_COMPANIES, FETCH_COMPANY, CREATE_COMPANY } from '../actions/types'



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
        case CREATE_COMPANY:
            return { ...state, [newObjectKey(state)]:  action.data }
        case FETCH_COMPANY:
            return { ...state, COMPANY: action.data }
        case FETCH_COMPANIES:
            console.log(state)
            return { ...state, all: action.data }
        // case EDIT_COMPANY:
        //     return { ...state, all: action.payload.data }
        default:
            return state
    }
}