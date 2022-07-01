import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { ContainerHome, ContentHome, BoxHomeLeft, BoxHomeRight, BrandImg, BrandDiv } from './Home.styled';
import UolBall from '../assets/img/uol-ball-transparent-1.png';
import Title from '../components/Title/Title';
import { Text } from '../components/Text/Text';


const Home = () => {
    return (
        <ContainerHome>
            <Header />
            <ContentHome>
                <BoxHomeLeft>
                    <BrandDiv>
                        <BrandImg src={UolBall} />
                    </BrandDiv>
                </BoxHomeLeft>
                <BoxHomeRight>
                    <Title tagName="h4" text="Our mission is" />
                    <Text page="home" text="Nossa missão é" />
                    <Title tagName="h2" text="to transform the world" />
                    <Text page="home" text="transformar o mundo" />
                    <Title tagName="h2" text="building digital experiences" />
                    <Text page="home" text="construindo experiências digitais" />
                    <Title tagName="h2" text="that enable our client’s growth" />
                    <Text page="home" text="que permitam o crescimento dos nossos clientes" />
                </BoxHomeRight>
            </ContentHome>
            <Footer />
        </ContainerHome>
    )
}

export default Home;