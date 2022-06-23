import React from 'react';
import {
    Temperature,
    Location,
    WeatherIcon,
    WeatherGroup,
} from './Weather.styled';

import cloudy from './cloudy.png';

export const Weather = () => {
    return (
        <div>
            <Location children='Passo Fundo - RS' />
            <WeatherGroup>
                <WeatherIcon src={cloudy} />
                <Temperature children='22º' />
            </WeatherGroup>
        </div>
    );
};
