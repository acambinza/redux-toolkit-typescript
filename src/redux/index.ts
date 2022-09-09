/* criação do estado global, que será a loja
    esse ficheiro vai ser importado no app.ts (raiz do sistema) como provider
*/
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';

import { createLogger } from 'redux-logger';

import thunk from 'redux-thunk';

import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const logger = createLogger({
    duration: true, // print the duration of each action?
    timestamp: true
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [logger, thunk]
})

export const persisted = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;