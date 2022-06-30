import React from 'react';
import { ContainerLogin, BoxRight, LogoDiv  } from './Login.styled';
import { Logo } from '../components/Logo/Logo';


const Login = () => {
return (
<ContainerLogin>
    <div></div>
    <BoxRight> 
        <LogoDiv>
        <Logo />
        </LogoDiv>
    </BoxRight>
</ContainerLogin>
)
}

export default Login;