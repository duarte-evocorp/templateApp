import React, { useEffect } from 'react';
import { ImageBackground } from 'react-native';

/** BEGIN Redux imports */
import { useSelector, useDispatch } from 'react-redux';
import { InfoActions } from '../../modules/Information';
/** END Redux imports */

import { Container, DollarContainer, Value, InfoContainer } from './styles';
import { images } from '../../styles';
import { dataFormat } from '../../helpers';
import { StatusBar, Text } from '../../components';


export default function Welcome(props) {
   const info = useSelector(state => state.info);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(InfoActions.getDollarComercial());
   }, []);

   return (
      <>
         <StatusBar translucent />

         <ImageBackground
            source={images.background}
            style={{ flex: 1 }}
            resizeMode={'stretch'}
         >
            <Container>

               <DollarContainer>
                  <InfoContainer>
                     <Text h2>{info.dollar && info.dollar.name}</Text>

                     {info.dollar.create_date &&
                        <Text>
                           Ultima atualização: {dataFormat.relative(info.dollar.create_date, new Date())}
                        </Text>
                     }
                  </InfoContainer>

                  <Value pctChange={parseFloat(info.dollar.pctChange)}>
                     {info.dollar && `R$ ${parseFloat(info.dollar.ask).toFixed(2)}`}
                  </Value>
               </DollarContainer>

               {props.children}
            </Container>
         </ImageBackground>
      </>
   );
}



