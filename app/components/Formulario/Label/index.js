import React from 'react';
import { View } from 'react-native';

import { Text } from '../../../components';

const Label = props => (
   <View style={{ flex: 2, alignSelf: 'stretch' }}>
      <Text label>{props.children}</Text>
   </View>
);

export default Label;
