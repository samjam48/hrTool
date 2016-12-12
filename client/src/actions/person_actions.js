export const FETCH_PERSONS = 'FETCH_PERSONS';
export const CREATE_PERSON = 'CREATE_PERSON';
export const UPDATE_PERSON = 'UPDATE_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';


export function createPerson(data, cb) {
    // const request = axios.Person(`${ROOT_URL}/Persons${API_KEY}`, props);
    const request = data;
    console.log('+++++++++++++++++++++++++++')
    console.log('createPerson() request = ')
    console.log(request)

    cb();
    return {
        type: CREATE_PERSON,
        payload: request
    };
}


export function updatePerson(update, id, Persons, cb) {
    // const request = axios.delete(`${ROOT_URL}/Persons/${id}${API_KEY}`);

    // console.log('---------------------')
    // console.log('updatePersons() request = ')
    // console.log(update)
    // console.log(id)
    let newState = (JSON.parse(JSON.stringify(Persons)))
    // console.log(Persons)
    newState[id].name = update.name
    newState[id].location = update.location
    // console.log(newState)
    cb()
    return {
        type: UPDATE_PERSON,
        payload: newState
    };
}


export function deletePerson(id, Persons, cb) {
    // const request = axios.delete(`${ROOT_URL}/Persons/${id}${API_KEY}`);

    // console.log('---------------------')
    // console.log('deletePersons() request = ')
    // console.log(Persons)
    // console.log(id)
    let newState = (JSON.parse(JSON.stringify(Persons)))
    // console.log(Persons)
    delete newState[id]
    // console.log(newState)
    cb()
    return {
        type: DELETE_PERSON,
        payload: newState
    };
}



// export function fetchPersons() {
//     // const request = axios.get(`${ROOT_URL}/Persons${API_KEY}`);
//     const request = state

//     console.log('---------------------')
//     console.log('fetchPersons() request = ')
//     console.log(request)

//     return {
//         type: FETCH_PERSONS,
//         payload: request
//     };
// }