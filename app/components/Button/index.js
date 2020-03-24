import React from 'react';

import { Container, Title } from './styles';

const Button = props => (
    <Container onPress={() => props.onPress()} {...props} >
        <Title>{props.children}</Title>
    </Container>
);

export default Button;
