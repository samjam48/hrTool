import axios from 'axios';

export const FETCH_PERSONS = 'FETCH_PERSONS';
export const CREATE_PERSON = 'CREATE_PERSON';
export const FETCH_PERSON = 'FETCH_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';

export const FETCH_COMPANIES = 'FETCH_COMPANIES';
export const CREATE_COMPANY = 'CREATE_COMPANY';
export const FETCH_COMPANY = 'FETCH_COMPANY';
export const DELETE_COMPANY = 'DELETE_COMPANY';

// const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
// const API_KEY = '?key=1q2w3esamsam';



export function fetchPersons() {
    // const request = axios.get(`${ROOT_URL}/Persons${API_KEY}`);
    const request = state

    console.log('---------------------')
    console.log('fetchPersons() request = ')
    console.log(request)

    return {
        type: FETCH_PERSONS,
        request
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