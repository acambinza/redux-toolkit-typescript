/* responsavel por fazer chamadas das apis externas  */

import * as types from '../../types/index'

import { getUserSuccess, UserType, getUserFailure } from '../../actions'
import { call, put, takeEvery, takeLatest } from '@redux-saga/core/effects';

let usersApi: UserType;

const userRequest = async (name: string) => {
    try {
        const request = await fetch(`https://api.github.com/users/${name}`);
        const response = await request.json();
        usersApi = response
        return true;
    } catch (error) {
        return false;
    }

}

export function* userData(action: { type: string, payload: string }) {
    try {
        yield call(userRequest, action.payload)
        yield put(getUserSuccess(usersApi))
    } catch (error) {
        yield put(getUserFailure("Erro ao requisitar"))
    }
}

function* userSaga() {
    yield takeLatest(types.GET_USER_REQUEST, userData);
}


export default userSaga;