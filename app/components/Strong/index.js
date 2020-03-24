import React from 'react';
import { Text } from 'react-native';

import { theme } from '../../styles';

const Strong = props => (
   <Text style={theme.fonts.bold}>{props.children}</Text>
);

export default Strong;
