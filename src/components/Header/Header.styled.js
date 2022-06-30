import styled from 'styled-components';
import {toRem} from '../../utils/convertToRem';

export const HeaderStyled = styled.header`
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    gap: ${toRem(15)};
`;

export const LogoDiv = styled.div`
    max-width: ${toRem(300)};
    max-height: ${toRem(84)};
    margin-top: ${toRem(19)};
    margin-left: ${toRem(28)};

    @media screen and (max-width: 780px) {
        max-width: ${toRem(248)};
        max-height: ${toRem(84)};
        margin-top: ${toRem(3)};
        margin-left: ${toRem(5)};
    }
`;

export const WeatherDiv = styled.div`
    flex-basis: ${toRem(300)};
    max-width: ${toRem(300)};
    margin-right: ${toRem(40)};
    margin-top: ${toRem(25)};

    @media screen and (max-width: 780px) {
        margin-top: ${toRem(24)};
        margin-right: ${toRem(22)};
        max-width: ${toRem(132)};
        max-height: ${toRem(89)};
    }
`;

export const DivClock = styled.div`
    margin-top: ${toRem(52)};

    @media screen and (max-width: 780px) {
        display: none;
    }
`;
