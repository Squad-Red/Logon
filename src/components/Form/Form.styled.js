import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

export const FormStyled = styled.form`
    max-width: ${toRem(379)};
    height: ${toRem(405)};
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 17.28% 37.78% 44.94%;
`;

export const InputsStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const FormFooterStyled = styled.div`
    display: grid;
    grid-template-rows: auto auto
`;

export const ErrorMessagesStyled = styled.span`
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    color: #E9B425;
    margin-top: ${toRem(28)}
`;
