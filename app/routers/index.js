import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { Icons } from '../components';
import { PAGES } from '../constants';
import { theme } from '../styles';

import HomeScreen from '../pages/Home';
import DetailsScreen from '../pages/Details';
import ComponentesScreen from '../pages/Componentes';
import FormScreen from '../pages/Form';

const AppStack = createStackNavigator();

const DEFAULT_HEADER = {
   screenOptions: {
      headerTitleStyle: theme.fonts.caption,
      headerTransparent: true,
      cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
      headerTintColor: theme.colors.white,
      headerBackImage: () => <Icons.Icon name={'ios-arrow-round-back'} source={Icons.Source.ionicons} />
   }
}

function App() {
   return (
      <NavigationContainer>
         <AppStack.Navigator initialRouteName={PAGES.Home.name} {...DEFAULT_HEADER}>
            <AppStack.Screen
               name={PAGES.Home.name}
               options={{ header: () => null }}
               component={HomeScreen}
            />

            <AppStack.Screen
               name={PAGES.Details.name}
               options={{ title: PAGES.Details.title }}
               component={DetailsScreen}
            />

            <AppStack.Screen
               name={PAGES.Components.name}
               options={{ title: PAGES.Components.title }}
               component={ComponentesScreen}
            />

            <AppStack.Screen
               name={PAGES.Form.name}
               options={{ title: PAGES.Form.title }}
               component={FormScreen}
            />
         </AppStack.Navigator>
      </NavigationContainer>
   );
}

export default App;