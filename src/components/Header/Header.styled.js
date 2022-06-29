import styled from "styled-components";
import {toRem} from '../../utils/convertToRem';

export const HeaderStyled = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    
`;

export const LogoDiv = styled.div`  
    max-width: ${toRem(300)};
    max-height:  ${toRem(84)};
`;