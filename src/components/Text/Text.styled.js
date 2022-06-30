import styled from 'styled-components';
import {toRem} from '../../utils/convertToRem';

export const TextDiv = styled.div`
    &.logon {
        max-width: ${toRem(350)};
    }

    &.home-footer {
        max-width: ${toRem(560)};
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }

    &.home-footer::before {
        content: '';
        position: absolute;
        height: ${toRem(70)};
        border-left: 0.09rem solid #e0e0e0;
    }
`;

export const TextWrapper = styled.p`
    font-family: Poppins;

    &.logon {
        color: #e0e0e0;
        font-size: 1rem;
        text-align: left;
        user-select: none;
        margin-block-start: 0;
        margin-block-end: 0;
    }

    &.home {
        color: #222222;
        font-size: 1.5rem;
        text-align: right;
        user-select: none;
        margin-block-start: 0;
        margin-block-end: 0;
    }

    &.home-footer {
        color: #e0e0e0;
        font-size: 0.75rem;
        text-align: right;
        user-select: none;
        margin-right: ${toRem(25)};
        margin-block-start: 0;
        margin-block-end: 0;
    }
`;
