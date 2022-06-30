import React from 'react';
import {LogoStyled} from './Logo.styled';

import logo from '../../assets/img/compassuolLogo.png';
import logoBlack from '../../assets/img/compassuolLogoBlackk.png';

export const Logo = ({variant}) => {
    return <LogoStyled src={variant === 'black' ? logoBlack : logo} />;
};
