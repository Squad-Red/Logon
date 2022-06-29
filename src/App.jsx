import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Timer} from './components/Timer/Timer';
import Button from './components/Button/Button';

import {TimerContext} from './contexts/TimerProvider';

function App() {
    const [timer, setTimer] = useContext(TimerContext);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100%',
                background:
                    ' linear-gradient(180deg, #33383D 0%, #1C1D20 100%)',
            }}
        >
            <Timer />
            <ButtonWrapper>
                <Button
                    id={'Login'}
                    title={'Reset'}
                    onClick={() => setTimer(600)}
                />
            </ButtonWrapper>
        </div>
    );
}

export default App;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
