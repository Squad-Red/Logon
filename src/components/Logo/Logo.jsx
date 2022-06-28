import React from 'react';
import {LogoStyled} from './Logo.styled';

import logo from '../../assets/img/compassuol-logo.png';
import logoBlack from '../../assets/img/compassuol-logo-black.png';

export const Logo = ({variant}) => {
    return <LogoStyled src={variant === 'black' ? logoBlack : logo} />;
};
