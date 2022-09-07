import {all} from 'redux-saga/effects'


import userSaga from '../sagas/user';

export default function* rootSaga():Generator<any> {
    yield all([
        userSaga(),
    ])
}