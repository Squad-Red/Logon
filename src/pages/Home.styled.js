import styled from 'styled-components';
import { toRem } from '../utils/convertToRem';
import UolBall from '../assets/img/uol-ball-transparent-1.png';


export const ContainerHome = styled.div`
    width: 100%;
    min-height: 100%;
    background: linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%);
    display: grid;
    grid-template-rows: 30.28% 60.46% 9.26%;

`;

export const ContentHome = styled.div`
    display: grid;
    grid-template-columns: 35.31% 64.69%;    
    
    @media (max-width: 768px) {
       grid-template-columns: auto;
       padding-right: ${toRem(32)};
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
    max-width: 100%;    
    min-width: ${toRem(660)};
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


