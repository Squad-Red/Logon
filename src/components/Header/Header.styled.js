import styled from 'styled-components';
import {toRem} from '../../utils/convertToRem';

export const HeaderStyled = styled.header`
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    gap: ${toRem(15)};
`;

export const LogoDiv = styled.div`
    max-width: ${toRem(206)};
    max-height: ${toRem(50)};
`;

export const WeatherDiv = styled.div`
    flex-basis: ${toRem(206)};
    max-width: ${toRem(206)};
`;
