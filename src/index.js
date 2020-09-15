import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Components/Login';
import {Provider}from 'react-redux'
import * as serviceWorker from './serviceWorker';
import  createStore  from './Redux/store';
import App from './App';
import { Router } from 'react-router';
const {store,history} = createStore()
 
const Application=(
    <Provider store ={store}>
       <Router history={history}>       
            <App/>
    </Router>
    </Provider>

)
ReactDOM.hydrate(Application,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
