import React from 'react';
import { ImageBackground } from 'react-native';

import { Container, Title, TemplateType } from './styles';

import { StatusBar } from '../../components';
import { images } from '../../styles';

const Welcome = () => (
    <>
        <StatusBar translucent />

        <ImageBackground
            source={images.background}
            style={{ flex: 1 }}
            resizeMode={'stretch'}
        >
            <Container>
                <Title>Welcome!</Title>
                <TemplateType>Template Basic</TemplateType>
            </Container>
        </ImageBackground>
    </>
);

export default Welcome;
