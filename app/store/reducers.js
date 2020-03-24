import { combineReducers } from 'redux';
import { InfoReducer } from '../modules/Information';

const rootReducer = combineReducers({
    info: InfoReducer
});

export default rootReducer;