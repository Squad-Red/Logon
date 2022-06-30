import {useContext} from 'react';
import {
    ButtonContainer,
    ButtonDiv,
    FooterStyled,
    InfoDiv,
    InteractiveDiv,
    TimerDiv,
} from './Footer.styled';
import {Text} from '../Text/Text';
import {Timer} from '../Timer/Timer';
import Button from '../Button/Button';

import TimerProvider, {TimerContext} from '../../contexts/TimerProvider';

const TimerArea = () => {
    const [timer, setTimer] = useContext(TimerContext);
    return (
        <InteractiveDiv>
            <TimerDiv>
                <Timer />
            </TimerDiv>
            <ButtonContainer>
                <ButtonDiv width='100%'>
                    <Button
                        title='Continuar navegando'
                        id='ResetTimer'
                        onClick={() => setTimer(600)}
                    />
                </ButtonDiv>
                <ButtonDiv width='100%'>
                    <Button title='Logout' id='Logout' />
                </ButtonDiv>
            </ButtonContainer>
        </InteractiveDiv>
    );
};

export const Footer = () => {
    return (
        <FooterStyled>
            <InfoDiv>
                <Text
                    page={'home-footer'}
                    text='Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.'
                />
            </InfoDiv>
            <TimerProvider>
                <TimerArea />
            </TimerProvider>
        </FooterStyled>
    );
};
