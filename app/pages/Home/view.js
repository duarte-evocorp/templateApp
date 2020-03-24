import React from 'react';

import { Welcome, Button, Text } from '../../components';
import { PAGES } from '../../constants';
import { ContainerWelcome, InfoContainer } from './styles';

export default function Home(props) {
   return (
      <Welcome>
         <ContainerWelcome>
            <InfoContainer>
               <Text title white>Welcome!</Text>
               <Text h1 white>Template Basic</Text>
            </InfoContainer>

            <Button
               onPress={() => props.navigation.navigate(PAGES.Details.name)}
            >
               Avançar
            </Button>
         </ContainerWelcome>
      </Welcome>
   );
}
