import axios from 'axios';
import { browserHistory } from 'react-router';

export const FETCH_PERSONS = 'FETCH_PERSONS';
export const CREATE_PERSON = 'CREATE_PERSON';
export const UPDATE_PERSON = 'UPDATE_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';

const ROOT_URL = 'http://localhost:3000'



/*----------------------- Fetch Persons -----------------------*/

export function fetchPersonsAsync() {
    // console.log("async fetch")
    return dispatch => {
        // console.log("inside async fetch")
        axios.get(`${ROOT_URL}/person`)
          .then(function (response) {
              response.data.forEach( (person) => dispatch(createPerson( person  ) ) )
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

export function createPersonAsync( data, cb) {
    // data.id = newObjectKey(Persons);
    // console.log(data)
    return dispatch => {
        axios.post(`${ROOT_URL}/person/create`, data)
          .then(function (response) {
            //   // console.log('inside axios post then')
                dispatch(createPerson(response.data))
                cb()
          })
          .catch(function (error) {
            console.log(error);
          });
    };
}


/*----------------------- Update Person -----------------------*/

export function updatePerson(changes, id, Persons ) {
    let newState = (JSON.parse(JSON.stringify(Persons)))
    newState[id].name = changes.name
    newState[id].location = changes.location
    return {
        type: UPDATE_PERSON,
        payload: newState
    };
}

export function updatePersonAsync(changes, id, Persons, cb) {
    console.log("async update")
    return dispatch => {
        console.log("inside async update")
        console.log(changes)
        console.log(cb)
        axios.post(`${ROOT_URL}/person/update/${id}`, changes)
          .then(function (response) {
              console.log('changes sent to db')
              dispatch( updatePerson(changes, id, Persons) )
              console.log('changes sent to state')
              cb(id)
            })
            .catch(function(error) {
                console.log(error);
            });
    };
}


/*----------------------- Delete Person -----------------------*/

export function deletePerson(id) {
    return {
        type: DELETE_PERSON,
        payload: id
    };
}

export function deletePersonAsync(id, cb) {
    console.log("async delete")
    return dispatch => {
        console.log("inside async delete")
        axios.get(`${ROOT_URL}/person/delete/${id}`)
          .then(function (response) {
              dispatch( deletePerson(id) )
              cb()
            })
            .catch(function(error) {
                console.log(error);
            });
    };
}



// export function fetchPersonsAsync() {
//     const request = axios.get(`${ROOT_URL}/person`);
//     // const request = data;
//     // console.log('+++++++++++++++++++++++++++')
//     // console.log('fetchPersons() request = ')
//     // console.log(request)

//     // cb();
//     return {
//         type: FETCH_PERSONS,
//         payload: request
//     };
// }



// export function createPerson(data, cb) {
//     const request = axios.post(`${ROOT_URL}/person/create`, data);
//     // const request = data;
//     // console.log('+++++++++++++++++++++++++++')
//     // console.log('createPerson() request = ')
//     // console.log(request)

//     // cb();
//     return {
//         type: CREATE_PERSON,
//         payload: request.then( (res) => {// console.log(res); cb() } )
//     };
// }