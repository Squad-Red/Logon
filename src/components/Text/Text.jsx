import React from 'react';
import { TextWrapper, TextDiv } from './Text.styled';

export const Text = ({ text, page }) => {
    return (
        <TextDiv className={page}>
            <TextWrapper className={page} >{text} </TextWrapper>
        </TextDiv>
    );
};

export default Text;