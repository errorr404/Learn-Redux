import React from 'react';
import App from './components/App';
import ReactDOM from 'react-dom';
import {createStore } from 'redux';
import {Provider } from 'react-redux';
import rootReducer from './reducers';
const store = createStore(rootReducer);
store.subscribe(()=>console.log('store',store.getState()));
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>

  , document.getElementById('root'));
