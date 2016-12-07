import { FETCH_PERSONS, CREATE_PERSON, FETCH_PERSON, DELETE_PERSON, UPDATE_PERSON } from '';

export function fetchPersons() {
    // const request = axios.get(`${ROOT_URL}/Persons${API_KEY}`);
    const request = state

    console.log('---------------------')
    console.log('fetchPersons() request = ')
    console.log(request)

    return {
        type: FETCH_PERSONS,
        payload: request
    };
}

// export function fetchPerson(id) {
//     // const request = axios.get(`${ROOT_URL}/Persons/${id}${API_KEY}`);
//     const request = id;

//     return {
//         request
//     };
// }





// export function fetchPersons() {
//     // const request = axios.get(`${ROOT_URL}/Persons${API_KEY}`);
//     const request = []//state

//     console.log('---------------------')
//     console.log('fetchPersons() request = ')
//     console.log(request)

//     return {
//         type: FETCH_PERSONS,
//         payload: request
//     };
// }


export function createPerson(data) {
    // const request = axios.Person(`${ROOT_URL}/Persons${API_KEY}`, props);
    const request = data;
    console.log('+++++++++++++++++++++++++++')
    console.log('createPersons() request = ')
    console.log(request)

   // cb();
    return {
        type: CREATE_PERSON,
        request
    };
}

export function fetchPerson(id) {
    // const request = axios.get(`${ROOT_URL}/Persons/${id}${API_KEY}`);
    const request = id;

    return {
        type: FETCH_PERSON,
        payload: request
    };
}


export function deletePerson(id, cb) {
    // const request = axios.delete(`${ROOT_URL}/Persons/${id}${API_KEY}`);
    const request = id;

    cb()
    return {
        type: DELETE_PERSON,
        payload: request
    };
}