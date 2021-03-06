import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css'
import reducer from './reducers'
const store = createStore(reducer);
console.log('1.store',store);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>

  , document.getElementById('root'));
