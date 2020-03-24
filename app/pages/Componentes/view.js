import React from 'react';

import { Welcome, Toast, Button } from '../../components';
import { Container } from './styles';
import { PAGES } from '../../constants';

export default function Componentes(props) {

   function handleToast() {
      return Toast({ message: 'Componente: Toast!' });
   }
   
   return (
      <Welcome>
         <Container>
            <Button
               onPress={() => handleToast()}
               danger
            >
               Toast
            </Button>

            <Button
               onPress={() => props.navigation.navigate(PAGES.Form.name)}
               danger
            >
               Formulário
            </Button>
         </Container>
      </Welcome>
   );
}