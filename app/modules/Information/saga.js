import * as InfoTypes from './types';
import { takeEvery, call, put } from 'redux-saga/effects';
import { Api, MessageResponseHandler } from '../../services';
import { prefixInTypes } from '../../helpers';


function* getDollarComercial() {
    yield put({
        type: InfoTypes.DOLLAR_COMERCIAL_REQUEST_LOADING,
        payload: {
            message: MessageResponseHandler.Response({
                type: InfoTypes.DOLLAR_COMERCIAL_REQUEST_LOADING
            }),
        }
    });
    try {
        const response = yield call(Api.template_host.get, '/USD-BRL');

        yield put({
            type: InfoTypes.DOLLAR_COMERCIAL_REQUEST_SUCCESS,
            payload: {
                dollar: response.data.USD,
                message: MessageResponseHandler.Response({
                    type: InfoTypes.DOLLAR_COMERCIAL_REQUEST_SUCCESS,
                })
            }
        });
    } catch (error) {
        yield put({
            type: InfoTypes.DOLLAR_COMERCIAL_REQUEST_ERROR,
            payload: {
                error: error.response || true,
                message: MessageResponseHandler.Response({
                    type: InfoTypes.DOLLAR_COMERCIAL_REQUEST_ERROR,
                    // response: response,
                    // customMessage: 'Não foi possivel continuar essa operação'
                }),
            }
        });
    }
}

const saga = [
    takeEvery(prefixInTypes(InfoTypes.DOLLAR_COMERCIAL_REQUEST_LOADING), getDollarComercial),
]

export default saga;