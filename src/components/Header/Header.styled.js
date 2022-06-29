import styled from "styled-components";
import {toRem} from '../../utils/convertToRem';

export const HeaderStyled = styled.header`
    display: grid;
    max-width: 100%;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto;
    justify-content: space-between;
`;

export const LogoDiv = styled.div`  
    max-width: ${toRem(206)};
    max-height:  ${toRem(50)};
`;