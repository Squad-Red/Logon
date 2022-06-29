import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

export const ClockDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: ${toRem(30)};
`;

export const HoursStyled = styled.p` 
    font-family: 'Poppins', sans-serif;
    color: #222222;
    font-weight: 700;
    font-size: ${toRem(110)};
    margin: 0;    
    line-height: ${toRem(100)};
`;


export const DateStyled = styled.p`
    font-family: 'Poppins', sans-serif;
    color: #222222;
    font-weight: 400;
    font-size: ${toRem(12)};
    margin: 0;  
`;
