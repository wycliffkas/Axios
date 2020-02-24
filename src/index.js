import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//setting axios global defaults
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"

axios.interceptors.request.use(request => {
    console.log("request", request);
    //can edit the request
    return request;
}, error => {
    console.log(error);
    //error for request sending eg internet connection
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log("response", response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
