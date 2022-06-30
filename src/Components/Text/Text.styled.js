import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

export const TextDiv = styled.div`

    &.logon {  
        max-width: ${toRem(350)};
    }

    &.home-footer {
        max-width: ${toRem(560)};
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }

    &.home-footer::before {
       content: '';
       position: absolute;
       height: ${toRem(70)};
       border-left: 0.09rem solid #E0E0E0;
    }

    @media screen and (max-width: 780px) {
        &.logon {
            max-width: ${toRem(230)} ;
        }
    }
`;

export const TextWrapper = styled.p`
    font-family: Poppins;

    &.logon {
        color: #E0E0E0;
        font-size: 1rem;
        text-align: left;
        user-select: none;
    }

    &.home {
        color: #222222;
        font-size: 1.5rem;
        text-align: right;
        user-select: none;
    }

    &.home-footer {
        color: #E0E0E0;
        font-size: 0.75rem;
        text-align: right;
        user-select: none;
        margin-right: ${toRem(25)};   
    }

    @media screen and (max-width: 780px) {
        &.logon {
            font-size: 0.75rem;
            user-select: none;
        }   
    }
`;