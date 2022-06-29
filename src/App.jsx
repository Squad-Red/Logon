import React, {useContext, useEffect, useState} from 'react';
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
            <Button
                id={'Login'}
                title={'Reset'}
                onClick={() => setTimer(600)}
            />
        </div>
    );
}

export default App;
