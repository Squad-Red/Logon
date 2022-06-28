import React from 'react';
import { Input } from '../Input/Input';
import Button from '../Button/Button';
import { FormStyled } from './Form.styled';
import { InputsStyled } from './Form.styled';
import { FormBtnStyled } from './Form.styled';
import { useForm } from "react-hook-form";


const Form = () => {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const onSubmit = data => console.log(data);    

        return (  
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <h5>Login</h5>
            <InputsStyled>
                <Input placeholder="Usuário" type="text" {...{register: register('user',{pattern: /^[\w.-]+\.[\w.-]+$/ })}} />
                <Input placeholder="Senha" type="password" {...{register: register('password',{pattern: /^(?=.*[0-9])(?!.*[ !@#%^&*_=+-])(?!.*[a-zA-z]).{6,9}$/ })}}/>                                      
            </InputsStyled>
            <FormBtnStyled>
            {errors.user || errors.password && <span>Ops, usuário ou senha inválidos. Tente novamente!</span>}       
                <Button title="Continuar" type="Submit" id="Login" />
            </FormBtnStyled>
        </FormStyled>
    )
}
export default Form;