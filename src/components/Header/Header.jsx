import React from 'react'
import { Logo } from '../Logo/Logo'
import { Weather } from '../Weather/Weather'
import { HeaderStyled, LogoDiv } from './Header.styled'


const Header = () => {
    return (
        <HeaderStyled>
            <LogoDiv>
                <Logo variant='black'/>
            </LogoDiv>
            <Weather />
        </HeaderStyled>
    )
}

export default Header;