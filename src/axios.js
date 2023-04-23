import axios from 'axios';

// const instance = axios.create({
//     baseURL : 'http:localhost:8800',
//     headers : {'X-Requested-With' : 'XMLHttpRequest'},
//     withCredentials:true
// });

axios.defaults.baseURL = 'http:localhost:8800';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit response config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default axios;
