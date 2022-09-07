/* criação do estado global, que será a loja
    esse ficheiro vai ser importado no app.ts (raiz do sistema) como provider
*/

import {
    createStore,
    applyMiddleware,
    Store,
    AnyAction
} from 'redux'

import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware =createSagaMiddleware();


const store:Store<unknown, AnyAction> = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);


sagaMiddleware.run(rootSaga)

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export * from './actions'
export * from './types'