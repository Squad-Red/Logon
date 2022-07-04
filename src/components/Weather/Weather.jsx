import React, {useState, useEffect} from 'react';
import {
    Temperature,
    Location,
    WeatherIcon,
    WeatherGroup,
    WeatherContainer,
} from './Weather.styled';

import sun from '../../assets/icons/002-sun.png';
import cloudy from '../../assets/icons/013-cloudy-1.png';
import cloud from '../../assets/icons/004-cloud.png';
import raining from '../../assets/icons/006-raining.png';
import storm from '../../assets/icons/007-storm.png';
import thunder from '../../assets/icons/011-storm-1.png';

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
            return sun;
        case 1003:
            return cloudy;
        case (code >= 1006 && code <= 1030) || (code > 1087 && code < 1150):
            return cloud;
        case (code >= 1063 && code < 1087) ||
            (code >= 1150 && code < 1210) ||
            (code >= 1240 && code < 1273):
            return raining;
        case 1087:
            return storm;
        case code >= 1273:
            return thunder;
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
                setIcon(selectIcon(data.current.condition.code));
                setTemperature(`${data.current.temp_c}º`);
            } catch (error) {
                setLocation('Clima indisponível');
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
