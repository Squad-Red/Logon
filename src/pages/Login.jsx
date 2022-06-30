import React from 'react';
import { ContainerLogin, BoxRight, LogoDiv, BoxLeft, Greeting } from './Login.styled';
import { Logo } from '../components/Logo/Logo';
import Title from '../components/Title/Title';
import { Text } from '../components/Text/Text';
import Form from '../components/Form/Form';

const Login = () => {
    return (
        <ContainerLogin>
            <BoxLeft>
               <Greeting>
                <Title tagName="h3" text="Olá,"/>
                <Text text="Para continuar navegando de forma segura, efetue o login na rede." page="logon" />
                </Greeting> 
                <Form />
            </BoxLeft>
            <BoxRight>
                <LogoDiv>
                    <Logo />
                </LogoDiv>
            </BoxRight>
        </ContainerLogin>
    )
}

export default Login;