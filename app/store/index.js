import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';
import * as Middlewares from './middlewares';

const sagaMiddleware = createSagaMiddleware();
const arrayOfMiddlewares = [sagaMiddleware];

// if (Object.keys(Middlewares)[0] !== 'default') {
//     arrayOfMiddlewares.push(...Object.values(Middlewares));
// };

const store = createStore(reducers, applyMiddleware(...arrayOfMiddlewares));

sagaMiddleware.run(rootSaga);

export default store;
