import React from 'react';
import { Input } from '../Input/Input';
import Button from '../Button/Button';
import { FormStyled } from './Form.styled';
import { InputsStyled } from './Form.styled';
import { FormBtnStyled } from './Form.styled';

const Form = () => {
    return (
        <FormStyled>
            <h5>Login</h5>
            <InputsStyled>
                <Input placeholder="Usuário" type="text" />
                <Input placeholder="Senha" type="password" />
            </InputsStyled>
            <FormBtnStyled>
                <Button title="Continuar" type="Submit" id="Login" />
            </FormBtnStyled>
        </FormStyled>
    )
}
export default Form;