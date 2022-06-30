import styled from 'styled-components';
import {toRem} from '../../utils/convertToRem';

export const WeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    user-select: none;
`;

export const Location = styled.p`
    font-size: ${toRem(14)};
    color: #222222;
    margin-bottom: ${toRem(10)};
    text-align: right;
    margin-top: 0;
`;

export const WeatherGroup = styled.div`
    width: 100%;
    height: ${toRem(45)};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: ${toRem(9)};
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
    align-self: flex-start;
`;
