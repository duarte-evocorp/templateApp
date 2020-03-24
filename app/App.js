import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import RouterRoot from './routers';
import store from './store';

const App = () => (
   <Provider store={store}>
      <RouterRoot />
   </Provider>
);

export default App;