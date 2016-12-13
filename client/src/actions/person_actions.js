import axios from 'axios';
import { browserHistory } from 'react-router';

export const FETCH_PERSONS = 'FETCH_PERSONS';
export const CREATE_PERSON = 'CREATE_PERSON';
export const UPDATE_PERSON = 'UPDATE_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';
const ROOT_URL = 'http://localhost:3000'
// import ReduxThunk from 'redux-thunk' 




/*----------------------- Fetch Persons -----------------------*/

export function fetchPersons(profiles) {
    console.log(profiles)
    return {
        type: FETCH_PERSONS,
        payload: profiles
    };
};

export function fetchPersonsAsync() {
    console.log("async fetch")
    return dispatch => {
        console.log("inside async fetch")
        axios.get(`${ROOT_URL}/person`)
          .then(function (response) {
                dispatch(fetchPersons(response.data))
            })
            .catch(function(error) {
                console.log(error);
            });
    };
}

/*----------------------- Create Person -----------------------*/

export function createPerson(data) {
    return {
        type: CREATE_PERSON,
        payload: data
    };
}

export function createPersonAsync(data, cb) {
    return dispatch => {
        axios.post(`${ROOT_URL}/person/create`, data)
          .then(function (response) {
                dispatch(createPerson(response.data))
                cb()
          })
          .catch(function (error) {
            console.log(error);
          });
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



// export function fetchPersonsAsync() {
//     const request = axios.get(`${ROOT_URL}/person`);
//     // const request = data;
//     console.log('+++++++++++++++++++++++++++')
//     console.log('fetchPersons() request = ')
//     console.log(request)

//     // cb();
//     return {
//         type: FETCH_PERSONS,
//         payload: request
//     };
// }



// export function createPerson(data, cb) {
//     const request = axios.post(`${ROOT_URL}/person/create`, data);
//     // const request = data;
//     console.log('+++++++++++++++++++++++++++')
//     console.log('createPerson() request = ')
//     console.log(request)

//     // cb();
//     return {
//         type: CREATE_PERSON,
//         payload: request.then( (res) => {console.log(res); cb() } )
//     };
// }