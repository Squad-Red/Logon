import styled from 'styled-components';

export const InputContainer = styled.div`
    max-width: 23.75rem;
    height: 3.75rem;
    padding: 0 1.25rem;
    display: inline-flex;
    align-items: center;
    border: 1px solid #ffffff;
    border-width: 2px;
    border-radius: 50px;

    :focus-within {
        outline: 1px solid #e9b425;
        outline-offset: -2px;
        outline-width: 2px;
    }
`;

export const InputStyled = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    background: transparent;
    color: #e0e0e0;

    ::placeholder {
        color: #e0e0e0;
    }
`;

export const IconStyled = styled.img`
    width: 1.25rem;
    color: #e0e0e0;
`;
