import { all } from 'redux-saga/effects';
import { InfoSaga } from '../modules/Information';

export default function* root() {
    yield all([
        ...InfoSaga
    ])
};