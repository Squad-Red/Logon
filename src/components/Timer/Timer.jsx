import {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import {
    Countdown,
    CountdownContainer,
    TimerText,
    TimerContainer,
} from './Timer.styled';

import {TimerContext} from '../../contexts/TimerProvider';

export const Timer = () => {
    const navigate = useNavigate();

    const [timer, setTimer] = useContext(TimerContext);

    useEffect(() => {
        if (timer > 0) {
            const countDown = setTimeout(() => setTimer(timer - 1), 1000);
            return () => {
                clearTimeout(countDown);
            };
        } else navigate('/');
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
