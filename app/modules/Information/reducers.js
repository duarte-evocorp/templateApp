import * as InfoTypes from './types';
import { getKeyByValue } from '../../helpers';

const DEFAULT_STATE = {
    getDollarRequestDone: false,
    getDollarRequestLoading: false,
    dollar: [],
    //
    messageInfo: '',
    errorInfo: null
}

const InfoReducer = (state = DEFAULT_STATE, action) => {
    if (getKeyByValue(InfoTypes, action.type)) {
        state = {
            ...state,
            messageInfo: action.payload.message,
            errorInfo: action.payload.error || null
        };
    }

    switch (action.type) {
        case InfoTypes.DOLLAR_COMERCIAL_REQUEST_LOADING:
            return {
                ...state,
                getDollarRequestDone: false,
                getDollarRequestLoading: true
            };
        case InfoTypes.DOLLAR_COMERCIAL_REQUEST_SUCCESS:
            return {
                ...state,
                getDollarRequestDone: true,
                getDollarRequestLoading: false,
                dollar: action.payload.dollar
            };
        case InfoTypes.DOLLAR_COMERCIAL_REQUEST_ERROR:
            return {
                ...state,
                getDollarRequestDone: false,
                getDollarRequestDone: false
            };

        default:
            return state;
    }
}

export default InfoReducer;