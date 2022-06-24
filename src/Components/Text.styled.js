import styled from "styled-components";

export const TextDiv = styled.div`

    &.logon {  
        max-width: 19em;
    }

    &.home-footer {
        max-width: 36em;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }

    &.home-footer::before {
       content: '';
       position: absolute;
       height: 3.5em;
       border-left: 1px solid #E0E0E0;
    }

    @media screen and (max-width: 780px) {
        &.logon {
            max-width: 14em;
        }
        
    }
   
`;

export const TextWrapper = styled.p`
    font-family: Poppins;

    &.logon {
        color: #E0E0E0;
        font-size: 16px;
        text-align: left;
    }

    &.home {
        color: #222222;
        font-size: 24px;
        text-align: right;
    }

    &.home-footer {
        color: #E0E0E0;
        font-size: 12px;
        text-align: right;
        margin-right: 4em;   
    }

    @media screen and (max-width: 780px) {
        &.logon {
            font-size: 12px;
        }   
    }
`;