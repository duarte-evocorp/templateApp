import Axios from 'axios';
// import ErrorResponseHandler from './ErrorResponseHandler';

const template_host = Axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/all',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

template_host.interceptors.response.use(null, (error) => ErrorResponseHandler(error));

export default { template_host }
