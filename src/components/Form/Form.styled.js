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

export const FormBtnStyled = styled.div`
    margin-top: ${toRem(115)};
`;