import styled from 'styled-components';
import {toRem} from '../utils/convertToRem';

export const ContainerHome = styled.div`
    width: 100%;
    min-height: 100%;
    background: linear-gradient(105.96deg, #ffffff 0%, #f0f0f0 97.86%);
    display: grid;
    grid-template-rows: 30.28% 60.46% 9.26%;
`;

export const ContentHome = styled.div`
    display: grid;
    grid-template-columns: 35.31% 64.69%;

    @media (max-width: 768px) {
        grid-template-columns: auto;
    }
`;

export const BoxHomeLeft = styled.div`
    display: grid;
    grid-template-rows: 11.02% 88.98%;
`;

export const BrandDiv = styled.div`
    grid-row: 2/3;
    overflow: hidden;
`;

export const BrandImg = styled.img`
    max-width: 43vw;
    margin-left: ${toRem(-146)};
    margin-bottom: ${toRem(-242)};

    @media (max-width: 768px) {
        max-width: ${toRem(660)};
        margin-left: ${toRem(-213)};
    }
`;

export const BoxHomeRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 7vw;
    padding-bottom: 2vw;

    @media (max-width: 768px) {
        visibility: hidden;
        display: none;
    }
`;
