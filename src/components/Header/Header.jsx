import React from 'react';
import {Clock} from '../Clock/Clock';
import {Logo} from '../Logo/Logo';
import {Weather} from '../Weather/Weather';
import {HeaderStyled, LogoDiv, WeatherDiv, DivClock} from './Header.styled';

export const Header = () => {
    return (
        <HeaderStyled>
            <LogoDiv>
                <Logo variant='black' />
            </LogoDiv>
            <DivClock>
                <Clock />
            </DivClock>
            <WeatherDiv>
                <Weather />
            </WeatherDiv>
        </HeaderStyled>
    );
};
