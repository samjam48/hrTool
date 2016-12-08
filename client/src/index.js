import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';
import promise      from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory }       from 'react-router';

import routes   from './routes';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware( promise )( createStore );

var defaultState = {
    Persons: {
      0 : {id: 0, name: 'Sam', location: 'St-Gilles'},
      1 : {id: 1, name: 'Nyeem', location: 'Elium'}},
    Companies: {
      0 : {id: 0, name: 'banana', location: 'St-Gilles'},
      1 : {id: 1, name: 'funana', location: 'Elium'}}
  }

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, defaultState)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));