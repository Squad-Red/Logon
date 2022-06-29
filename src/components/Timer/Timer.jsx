import {useEffect, useState} from 'react';

import {
    Countdown,
    CountdownContainer,
    TimerText,
    TimerContainer,
} from './Timer.styled';

export const handleResetTimer = () => {
    setTimer(600);
};

export const Timer = () => {
    const [timer, setTimer] = useState(600);
    useEffect(() => {
        timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    }, [timer]);

    return (
        <TimerContainer>
            <TimerText>Application refresh in</TimerText>
            <CountdownContainer>
                <Countdown>{timer}</Countdown>
                <TimerText>{timer === 1 ? 'second' : 'seconds'}</TimerText>
            </CountdownContainer>
        </TimerContainer>
    );
};
