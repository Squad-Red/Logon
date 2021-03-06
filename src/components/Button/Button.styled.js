import styled from 'styled-components';
import {toRem} from '../../utils/convertToRem';

const StyledButton = styled.button`
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 1.125rem;
    font-weight: 700;
    cursor: pointer;

    &.Login {
        width: ${toRem(379)};
        height: ${toRem(67)};
        background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%) padding-box,
            linear-gradient(90deg, #ff2d04 0%, #c13216 100%) border-box;
        box-shadow: inset ${toRem(5)} ${toRem(5)} ${toRem(15)}
                rgba(0, 0, 0, 0.15),
            ${toRem(5)} ${toRem(5)} ${toRem(15)} rgba(0, 0, 0, 0.5);
        border: 0.125rem transparent;
        border-radius: ${toRem(50)};
    }

    &.Login:active {
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }

    &.Logout {
        width: 100%;
        height: ${toRem(100)};
        background: transparent;
        border: none;
        font-size: 0.75rem;
    }

    &.ResetTimer {
        width: ${toRem(131)};
        height: ${toRem(100)};
        background: #ffffff;
        color: #c13216;
        font-weight: 400;
        font-size: 0.75rem;
        border: none;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
`;

export default StyledButton;

export const ButtonContainer = styled.div`
    display: flex;
    min-width: 100%;
    justify-content: center;
`;
