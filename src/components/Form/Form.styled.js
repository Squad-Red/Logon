import styled from 'styled-components';
import {toRem} from '../../utils/convertToRem';

export const FormStyled = styled.form`
    max-width: ${toRem(379)};
    height: ${toRem(405)};
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 17.28% 37.78% 28.4% 16.54%;
`;

export const FormTitleStyled = styled.div`
    display: flex;
    align-items: center;
`;

export const InputsStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const FormErrorStyled = styled.div`
    display: flex;
    justify-content: center;
`;

export const ErrorMessagesStyled = styled.span`
    max-width: 30ch;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    color: #e9b425;
    margin-top: ${toRem(28)};
`;
