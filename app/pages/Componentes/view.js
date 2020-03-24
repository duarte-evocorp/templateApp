import React from 'react';

import { Welcome, Toast, Button } from '../../components';
import { Container } from './styles';

export default function Componentes() {

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
         </Container>
      </Welcome>
   );
}