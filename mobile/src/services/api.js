import axios from 'axios';

const api = axios.create({
   baseURL: 'http://b2-ugp.anonymous.mobile.exp.direct:80',
});

export default api;