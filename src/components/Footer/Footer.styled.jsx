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
`;

export const InfoDiv = styled.div`
    grid-column: 1/2;
    justify-self: flex-end;
    margin-left: ${toRem(40)};
`;

export const InteractiveDiv = styled.div`
    grid-column: 2/3;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TimerDiv = styled.div`
    display: flex;
    flex-basis: ${toRem(360)};
    justify-content: flex-end;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonDiv = styled.div``;
