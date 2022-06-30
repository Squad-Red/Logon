import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

export const StyledH2 = styled.h2`
    font-size: ${toRem(64)};
    font-weight: 700;
    color:#C12D18;
    text-align: right;
`;

export const StyledH3 = styled.h3`
    font-size: ${toRem(60)};
    font-weight: 400;
    color:#E0E0E0;
`;

export const StyledH4 = styled.h4`
    font-size:  ${toRem(30)};
    font-weight: 400;
    color: #E0E0E0;
`;

export const StyledH5 = styled.h5`   
    font-size: ${toRem(24)};
    font-weight: 700;
    color: #C12D18;
    text-align: right;
`;