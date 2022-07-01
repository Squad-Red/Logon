import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

export const StyledTest = styled.p`
    color:black;
    font-size: 128px;
`;

export const StyledH2 = styled.h2`
    font-size: ${toRem(64)};
    font-weight: 700;
    color:#C12D18;
    text-align: right;
    line-height:${toRem(67)};
    margin: 0;  
    margin-block-start: 0;
    margin-block-end: 0;
`;

export const StyledH3 = styled.h3`
    font-size: ${toRem(60)};
    font-weight: 400;
    color:#E0E0E0;
    line-height:${toRem(90)};
    margin: 0;  
    margin-block-start: 0;
    margin-block-end: 0;
`;

export const StyledH4 = styled.h4`
    font-size: ${toRem(36)};
    font-weight: 700;
    color: #C12D18;
    text-align: right;    
    line-height:${toRem(38)};
    margin: 0;  
    margin-block-start: 0;
    margin-block-end: 0;
`;

export const StyledH5 = styled.h5`   
    font-size:  ${toRem(30)};
    font-weight: 400;
    color: #E0E0E0;    
    line-height:${toRem(45)};
    margin: 0;  
    margin-block-start: 0;
    margin-block-end: 0;  
`;
