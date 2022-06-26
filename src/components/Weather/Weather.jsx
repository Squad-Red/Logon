import React, {useState, useEffect} from 'react';
import {
    Temperature,
    Location,
    WeatherIcon,
    WeatherGroup,
    WeatherContainer,
} from './Weather.styled';

import {weather} from '../../api/weather';

const queryWeather = async (query) => {
    const req = await weather.get('/current.json', {
        params: {q: query},
    });
    const res = await req.data;
    return res;
};

const selectIcon = (code) => {
    switch (code) {
        case 1000:
            return './src/assets/icons/002-sun.png';
        case 1003:
            return './src/assets/icons/013-cloudy-1.png';
        case (code >= 1006 && code <= 1030) || (code > 1087 && code < 1150):
            return './src/assets/icons/004-cloud.png';
        case (code >= 1063 && code < 1087) ||
            (code >= 1150 && code < 1210) ||
            (code >= 1240 && code < 1273):
            return './src/assets/icons/006-raining.png';
        case 1087:
            return './src/assets/icons/006-storm.png';
        case code >= 1273:
            return './src/assets/icons/006-storm-1.png';
    }
};

export const getWeather = (setLocation, setIcon, setTemperature) => {
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            try {
                const data = await queryWeather(`${lat},${lon}`);
                setLocation(
                    `${data.location.name} - ${data.location.region.replace(
                        /[^A-Z]/g,
                        '',
                    )}`,
                );
                setIcon(selectIcon(1003));
                setTemperature(`${data.current.temp_c}º`);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        },
        (error) => {
            if (error.PERMISSION_DENIED) {
                setLocation('Clima indisponível');
            }
        },
    );
};

export const Weather = () => {
    const [location, setLocation] = useState('');
    const [icon, setIcon] = useState('');
    const [temperature, setTemperature] = useState('');

    useEffect(() => {
        getWeather(setLocation, setIcon, setTemperature);
    }, []);

    return (
        <WeatherContainer>
            <Location children={location} />
            <WeatherGroup>
                {icon && <WeatherIcon src={icon} />}
                <Temperature children={`${temperature}`} />
            </WeatherGroup>
        </WeatherContainer>
    );
};
