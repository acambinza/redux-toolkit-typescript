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

const sagaMiddleware =createSagaMiddleware();

const store:Store<unknown, AnyAction> = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

export default store;