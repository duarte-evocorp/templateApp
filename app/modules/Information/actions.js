import * as InfoTypes from './types';
import { prefixInTypes } from '../../helpers';

const getDollarComercial = () => {
    return {
        type: prefixInTypes(InfoTypes.DOLLAR_COMERCIAL_REQUEST_LOADING)
    }
};

export {
    getDollarComercial
}