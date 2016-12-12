import { combineReducers } from 'redux';
import PersonReducer from './person_reducer';
import CompanyReducer from './company_reducer';
import { reducer as formReducer } from 'redux-form';

import {routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  Persons: PersonReducer,
  Companies: CompanyReducer,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
