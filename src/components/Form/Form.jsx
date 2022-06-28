import React from 'react';
import { Input } from '../Input/Input';
import Button from '../Button/Button';
import { FormStyled } from './Form.styled';
import { InputsStyled } from './Form.styled';
import { FormButtonStyled } from './Form.styled';
import { useForm } from "react-hook-form";
import { ErrorMessagesStyled } from './Form.styled';
import { FormErrorStyled } from './Form.styled';
import Title from '../Title/Title';
import { FormTitleStyled } from './Form.styled';


const Form = () => {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const onSubmit = data => console.log(data);    

        return (  
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <FormTitleStyled>
            <Title tagName="h4" text="Login" />
            </FormTitleStyled>
            <InputsStyled>
                <Input placeholder="Usuário" type="text" {...{register: register('user',{pattern: /^[\w.-]+\.[\w.-]+$/, required:true })}} />
                <Input placeholder="Senha" type="password" {...{register: register('password',{pattern: /^(?=.*[0-9])(?!.*[ !@#%^&*_=+-])(?!.*[a-zA-z]).{6,9}$/, required:true })}} required/>                                      
            </InputsStyled>
            <FormErrorStyled>
            {(errors.user && <ErrorMessagesStyled>Ops, usuário ou senha inválidos. Tente novamente!</ErrorMessagesStyled>) || 
            (errors.password && <ErrorMessagesStyled>Ops, usuário ou senha inválidos. Tente novamente!</ErrorMessagesStyled>)}       
            </FormErrorStyled>
            <FormButtonStyled>
                <Button title="Continuar" type="Submit" id="Login" />
            </FormButtonStyled>
        </FormStyled>
    )
}
export default Form;