import axios from 'axios';

import { destroyErrors, destroyMessage, getErrorBag } from '../error';
import { setErrorBag, setMessage } from '../error';

const http = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

http.interceptors.request.use(
    config => {
        //console.log('No destroy yet');
        console.log(config);
        console.log('\n1st!');
        destroyErrors(); // Wis oude fouten voordat een nieuw verzoek wordt uitgevoerd
        console.log(config);
        console.log('\n2nd!');
        destroyMessage(); // Wis oude "messages" voordat een nieuw verzoek wordt uitgevoerd
        console.log(config);
        console.log('\n3rd!');
        return config;
    },
    error => Promise.reject(error)
);

http.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 422) {
            setErrorBag(error.response.data.errors); // Sla validatiefouten op in de error bag
            setMessage(error.response.data.message); // Sla de algemene foutmelding op
        }
        return Promise.reject(error);
    }
);

export const getRequest = (endpoint) => http.get(endpoint);
export const postRequest = (endpoint, data) => http.post(endpoint, data);
export const putRequest = (endpoint, data) => http.put(endpoint, data);
export const deleteRequest = (endpoint) => http.delete(endpoint);