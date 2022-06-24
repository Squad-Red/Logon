import React from 'react';
import StyledButton from './Button.styled';

const Button = ({ title, type, id }) => {

    return (       
            <StyledButton className={`${id}`} type={type} id={id}>{title}</StyledButton>        
    )
};

export default Button;