import React from 'react';
import { Input } from '../Input/Input';
import Button from '../Button/Button';
import { FormStyled } from './Form.styled';
import  { Text } from '../Text/Text';


const Form = () => {
return (
    <FormStyled>
        <Text text="Login" page="Logon" />
        <div>
        <Input placeholder="Usuário" type="text" />
        <Input placeholder="Senha" type="password" />
        </div>
        <div>
        <Button title="Continuar" type="Submit" id="Login"/>
        </div>
    </FormStyled>
)
}

export default Form;