import React from 'react';
import ReactDOM from 'react-dom/client';
import {GlobalStyle} from '../globalStyles';
import App from './App';
import TimerProvider from './contexts/TimerProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <GlobalStyle />
        <TimerProvider>
            <App />
        </TimerProvider>
    </>,
);
