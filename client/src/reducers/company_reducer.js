import { FETCH_COMPANIES, FETCH_COMPANY, CREATE_COMPANY } from '../actions/company_actions'



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

        // case EDIT_COMPANY:
        //     return { ...state, all: action.payload.data }
        default:
            return state
    }
}