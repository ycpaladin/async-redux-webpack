import React from 'react'
import { render } from 'react-dom'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from  './configureStore'
// import inputApp from './reducers'


import  '!style!css!../css/base.css'
import  '!style!css!../css/app.css'
let store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#todoapp")
);