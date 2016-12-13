export const FETCH_COMPANIES = 'FETCH_COMPANIES';
export const UPDATE_COMPANY  = 'UPDATE_COMPANY';
export const CREATE_COMPANY  = 'CREATE_COMPANY';
export const DELETE_COMPANY  = 'DELETE_COMPANY';

export function createCompany(data, cb){
    const request = data;
    cb();
    return {
        type: CREATE_COMPANY,
        payload: request
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