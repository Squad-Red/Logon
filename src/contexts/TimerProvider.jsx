import {createContext, useState} from 'react';

export const TimerContext = createContext();

const TimerProvider = (props) => {
    const [timer, setTimer] = useState(600);

    return (
        <TimerContext.Provider value={[timer, setTimer]}>
            {props.children}
        </TimerContext.Provider>
    );
};

export default TimerProvider;
