import { combineReducers } from 'redux';
import PersonReducer from './person_reducer';
import CompanyReducer from './company_reducer';
import authReducer from './auth_reducer';
import { reducer as form } from 'redux-form';

import {routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  Persons: PersonReducer,
  Companies: CompanyReducer,
  form,
  routing: routerReducer,
  auth: authReducer
});

export default rootReducer;
