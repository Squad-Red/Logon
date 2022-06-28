import axios from 'axios';

export const weather = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    params: {
        key: '3e80f85332424d23a5e131540222406',
        lang: 'pt',
    },
});
