import React from 'react';
import { StatusBar } from 'react-native';

const Status = props => (
    <StatusBar
        backgroundColor={props.translucent ? 'transparent' : props.backgroundColor}
        translucent={props.translucent}
    />
)

export default Status;
