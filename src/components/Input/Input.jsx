import React from 'react';
import {IconStyled, InputContainer, InputStyled} from './Input.styled';

export const Input = ({src, placeholder, type}) => {
    return (
        <InputContainer>
            <InputStyled placeholder={placeholder} type={type} />
            <IconStyled src={src} />
        </InputContainer>
    );
};
