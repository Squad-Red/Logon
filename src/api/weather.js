import axios from 'axios';

export const weather = axios.create({
    baseURL: 'https://api.weatherapi.com/v1',
    params: {
        key: import.meta.env.VITE_API_KEY,
        lang: 'pt',
    },
});
