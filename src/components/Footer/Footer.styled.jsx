import styled from 'styled-components';
import {toRem} from '../../utils/convertToRem';

export const FooterStyled = styled.div`
    display: grid;
    min-width: 100%;
    grid-template-columns: 1fr 1fr;
    height: ${toRem(100)};
    align-self: flex-end;
    align-items: center;
    background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const InfoDiv = styled.div`
    grid-column: 1/2;
    justify-self: flex-end;
    margin-left: ${toRem(40)};

    @media (max-width: 768px) {
        display: none;
    }
`;

export const InteractiveDiv = styled.div`
    grid-column: 2/3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        grid-column: 1/-1;
        width: 100%;
    }
`;

export const TimerDiv = styled.div`
    display: flex;
    flex-basis: ${toRem(360)};
    justify-content: flex-end;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: row-reverse;
        width: 100%;
    }
`;

export const LogoutDiv = styled.div``;

export const ResetDiv = styled.div`
    @media (max-width: 768px) {
        width: 100%;
    }
`;
