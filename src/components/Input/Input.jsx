import React from 'react';
import {IconStyled, InputContainer, InputStyled} from './Input.styled';

import lock from '../../assets/icons/lock.svg';
import person from '../../assets/icons/person.svg';

export const Input = ({placeholder, type, register}) => {
    return (
        <InputContainer>
            <InputStyled placeholder={placeholder} type={type} {...register}/>
            <IconStyled src={type === 'password' ? lock : person} />
        </InputContainer>
    );
};
