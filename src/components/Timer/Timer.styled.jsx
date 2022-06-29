import styled from 'styled-components';
import {toRem} from '../../utils/convertToRem';

export const TimerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: ${toRem(237)};
`;

export const TimerText = styled.span`
    font-size: ${toRem(14)};
    color: #ffffff;
    text-align: right;
    max-width: 11ch;
`;

export const CountdownContainer = styled(TimerContainer)`
    width: ${toRem(94)};
    flex-direction: column;
`;

export const Countdown = styled.span`
    max-height: ${toRem(53)};
    font-size: ${toRem(48)};
    font-weight: 700;
    color: #ffffff;
`;
