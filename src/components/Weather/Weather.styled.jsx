import styled from 'styled-components';
import {toRem} from '../../utils/convertToRem';

export const Location = styled.p`
    font-size: ${toRem(14)};
    color: #222222;
`;

export const WeatherGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Temperature = styled.span`
    font-size: ${toRem(48)};
    font-weight: 700;
    color: #222222;
    line-height: ${toRem(10)};
`;

export const WeatherIcon = styled.img`
    width: ${toRem(34)};
    height: ${toRem(34)};
    margin-bottom: ${toRem(5)};
`;
