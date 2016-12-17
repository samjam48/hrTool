import axios from 'axios';
import { browserHistory } from 'react-router'

export const FETCH_COMPANIES = 'FETCH_COMPANIES';
export const CREATE_COMPANY  = 'CREATE_COMPANY';
export const UPDATE_COMPANY  = 'UPDATE_COMPANY';
export const DELETE_COMPANY  = 'DELETE_COMPANY';
const ROOT_URL = 'http://localhost:3000'


// export function fetchCompanies(profiles) {
//     // console.log(profiles)
//     return {
//         type: FETCH_COMPANIES,
//         payload: profiles
//     };
// };


export function fetchCompaniesAsync(token) {
    console.log("async fetch")
    return dispatch => {
        console.log("inside async fetch")
        axios.get(`${ROOT_URL}/company`, token)
          .then(function (response) {
              console.log(response)
              response.data.forEach( (company) => dispatch(createCompany( company  ) ) )
                
            })
            .catch(function(error) {
                console.log(error);
            });
    };
}


export function createCompany(data){
    return {
        type: CREATE_COMPANY,
        payload: data
    };
}

export function createCompanyAsync( data, cb) {
    return dispatch => {
        axios.post(`${ROOT_URL}/company/create`, data)
          .then(function (response) {
                dispatch(createCompany(response.data))
                cb()
          })
          .catch(function (error) {
            console.log(error);
          });
    };
}

export function updateCompany(update, id, Companies, cb) {
    let newState = (JSON.parse(JSON.stringify(Companies)))
    newState[id].name = update.name
    newState[id].location = update.location
    cb()
    return {
        type: UPDATE_COMPANY,
        payload: newState
    };
}

export function deleteCompany(id, Companies, cb) {
    let newState = (JSON.parse(JSON.stringify(Companies)))
    delete newState[id]
    cb()
    return {
        type: DELETE_COMPANY,
        payload: newState
    };
}