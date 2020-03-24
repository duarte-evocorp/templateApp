import React from 'react';
import { Platform } from 'react-native';

// FAMILY ICONS
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Normalize } from '../../helpers';

const Source = {
    ionicons: 'Ionicons'
};

const Icon = (props) => {
    const { source, name, size = 25, color = '#fff' } = props;

    switch (source) {
        case Source.ionicons:
            IconFont = Ionicons
            break;
    }

    return (
        <IconFont
            style={{
                ...Platform.select({
                    ios: {
                        height: Normalize.verticalScale(size) - 1
                    },
                })
            }}
            name={name}
            size={Normalize.verticalScale(size)} color={color} />
    );
}

export default { Source, Icon }