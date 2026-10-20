import axios from 'axios';

import { destroyErrors, destroyMessage } from '../error';
import { setErrorBag, setMessage } from '../error';

const http = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Clearing errors upon page switching
http.interceptors.request.use(
    config => {
        // Get rid of errors before doing a new request
        destroyErrors();
        // Ridding messages before a new request
        destroyMessage();
        return config;
    },
    error => Promise.reject(error)
);

// Error handling once something goes awry
http.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 422) {
            // Put in validation errors in the error bag
            setErrorBag(error.response.data.errors);
            // Store error messages
            setMessage(error.response.data.message);
        }
        return Promise.reject(error);
    }
);

// Specific request handling for binding remote and local storage
export const getRequest = (endpoint) => http.get(endpoint);
export const postRequest = (endpoint, data) => http.post(endpoint, data);
export const putRequest = (endpoint, data) => http.put(endpoint, data);
export const deleteRequest = (endpoint) => http.delete(endpoint);