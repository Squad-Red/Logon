import React from 'react';
import { Input } from '../Input/Input';
import Button from '../Button/Button';
import {
    FormStyled,
    InputsStyled,
    ErrorMessagesStyled,
    FormErrorStyled,
    FormTitleStyled,
} from './Form.styled';
import { useForm } from 'react-hook-form';
import Title from '../Title/Title';

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <FormTitleStyled>
                <Title tagName='h5' text='Login' />
            </FormTitleStyled>
            <InputsStyled>
                <Input
                    placeholder='Usuário'
                    type='text'
                    isError={errors.user || errors.password}
                    {...{
                        register: register('user', {
                            pattern: /^[\w.-]+\.[\w.-]+$/,
                            required: true,
                        }),
                    }}
                />
                <Input
                    placeholder='Senha'
                    type='password'
                    isError={errors.user || errors.password}
                    {...{
                        register: register('password', {
                            pattern:
                                /^(?=.*[0-9])(?!.*[ !@#%^&*_=+-])(?!.*[a-zA-z]).{6,9}$/,
                            required: true,
                        }),
                    }}
                    required
                />
            </InputsStyled>
            <FormErrorStyled>
                {(errors.user && (
                    <ErrorMessagesStyled>
                        Ops, usuário ou senha inválidos. Tente novamente!
                    </ErrorMessagesStyled>
                )) ||
                    (errors.password && (
                        <ErrorMessagesStyled>
                            Ops, usuário ou senha inválidos. Tente novamente!
                        </ErrorMessagesStyled>
                    ))}
            </FormErrorStyled>
            <Button title='Continuar' type='Submit' id='Login' />
        </FormStyled>
    );
};
export default Form;
