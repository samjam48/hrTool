import { combineReducers } from 'redux';
import PersonReducer from './person_reducer';
import CompanyReducer from './company_reducer';
import { reducer as formReducer } from 'redux-form';



const rootReducer = combineReducers({
  Persons: PersonReducer,
  Companies: CompanyReducer,
  form: formReducer
});

export default rootReducer;
