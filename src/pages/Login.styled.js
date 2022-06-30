import styled from 'styled-components';
import {toRem} from '../utils/convertToRem';
import Notebook from '../assets/img/notebook-background.png';

export const ContainerLogin = styled.div`
    width: 100%;
    min-height: 100%;
    background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
    display: grid;
    grid-template-columns: 50% 50%;

    @media (max-width: 768px) {
        grid-template-columns: auto;
    }
`;

export const BoxLeft = styled.div`
    display: grid;
    grid-template-rows: 10.46% 33.7% 55.84%;
    justify-content: center;
    padding: 0 ${toRem(20)};
`;

export const LogoLeftDiv = styled.div`
    display: flex;
    width: ${toRem(349)};
    height: ${toRem(94)};
    margin-top: ${toRem(19)};
    margin-left: ${toRem(-24)};
    visibility: hidden;

    @media (max-width: 768px) {
        visibility: visible;
    }
`;

export const Greeting = styled.div`
    margin-top: ${toRem(84)};
`;

export const BoxRight = styled.div`
    background-image: url(${Notebook});
    background-position: right top;
    background-size: cover;
    justify-content: center;
    display: flex;

    @media (max-width: 768px) {
        visibility: hidden;
        display: none;
    }
`;

export const LogoRightDiv = styled.div`
    width: ${toRem(349)};
    height: ${toRem(94)};
    margin-top: ${toRem(19)};
`;
