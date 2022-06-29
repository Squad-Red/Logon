import styled from "styled-components";
import {toRem} from '../../utils/convertToRem';

export const HeaderStyled = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: space-between; 
    margin: 1rem 1.5rem 0 1rem;
`;

export const LogoDiv = styled.div`  
    max-width: ${toRem(200)};
    max-height:  ${toRem(50)};
    padding: 0;
`;