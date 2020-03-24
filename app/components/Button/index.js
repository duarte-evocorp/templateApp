import React from 'react';

import { Container, Title, ButtonContainer } from './styles';
import { Icons } from '../../components';

const Button = props => (
   <Container onPress={() => props.onPress()} {...props} >
      <ButtonContainer>
         <Title icon={props.iconName}>
            {props.children}
         </Title>

         {props.iconName &&
            <Icons.Icon
               name={iconName}
               size={15}
               source={Icons.Source.ionicons}
            />
         }
      </ButtonContainer>
   </Container>
);

export default Button;
