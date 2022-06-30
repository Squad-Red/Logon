import styled from 'styled-components';
import {toRem} from '../utils/convertToRem';
import Notebook from '../assets/img/notebook-background.png';

export const ContainerLogin = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
display: grid;
grid-template-columns: 50% 50%; 
`;

export const BoxRight = styled.div`
background-image: url(${Notebook});
background-position: right top;
background-size: cover;
`;

export const LogoDiv = styled.div`
width:  ${toRem(349)};
height: ${toRem(94)};
margin-top:  ${toRem(19)};
`;