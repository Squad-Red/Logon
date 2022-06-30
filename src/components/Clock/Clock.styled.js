import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

export const ClockDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const HoursStyled = styled.h1` 
    font-family: 'Poppins', sans-serif;
    color: #222222;
    font-weight: 700;
    font-size: ${toRem(144)};
    margin: 0;    
    line-height: ${toRem(130)};
`;


export const DateStyled = styled.p`
    font-family: 'Poppins', sans-serif;
    color: #222222;
    font-weight: 400;
    font-size: ${toRem(14)};
    margin: 0;  
`;
