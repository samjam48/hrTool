import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';
import promise      from 'redux-promise';
import Thunk from 'redux-thunk'; 
import { fetchPersonsAsync } from './actions/person_actions';

import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory }       from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';


import routes   from './routes';
import reducers from './reducers';

var defaultState = {
    Persons: {
      0 : {id: 0, name: 'Sam', location: 'St-Gilles'},
      1 : {id: 1, name: 'Nyeem', location: 'Elium'}},
    Companies: {
      0 : {id: 0, name: 'banana', location: 'St-Gilles'},
      1 : {id: 1, name: 'funana', location: 'Elium'}}
  }

const createStoreWithMiddleware = applyMiddleware( Thunk, promise )( createStore );

const store = createStoreWithMiddleware(reducers)
store.dispatch( fetchPersonsAsync() )
// createStoreWithMiddleware(reducers, defaultState)
ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));







// // EPIC DEBUGGIN THUNK AND STORE CODE

//   console.log(Thunk)

// const Thunk = (function createThunkMiddleware(extraArgument) {
  
//   return ({ dispatch, getState }) => next => action => {

//     if (typeof action === 'function') {
//       return action(dispatch, getState, extraArgument);
//     }

//     return next(action);
//   };
// } )()

  // const middlewares = [Thunk]; //logger - we don't add it because we have devtools
  // const enhancers = compose(
  //     applyMiddleware(...middlewares),
  //     window.devToolsExtension ? window.devToolsExtension() : f => f
  // );

  // const store = createStore(reducers, enhancers)

  //   // Sinc browser history with store
  //   const history = syncHistoryWithStore(browserHistory, store);


