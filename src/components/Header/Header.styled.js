import styled from "styled-components";
import {toRem} from '../../utils/convertToRem';

export const HeaderStyled = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: space-between; 
    margin: 1rem 2.2rem;
`;

export const LogoDiv = styled.div`  
    max-width: ${toRem(206)};
    max-height:  ${toRem(50)};
    margin-top: 1rem;
`;