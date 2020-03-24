import React from 'react';

import { Welcome, Icons, Button } from '../../components';
import { PAGES } from '../../constants';
import { Container } from './styles';

export default function Details(props) {
   return (
      <Welcome>
         <Container>
            <Icons.Icon name="ios-heart-empty" source={Icons.Source.ionicons} />

            <Button
               onPress={() => props.navigation.navigate(PAGES.Components.name)}
            >
               Componentes
            </Button>
         </Container>
      </Welcome>
   );
}