import * as types from '../../types'


export type UserType = {
    name:string,
    avatar: string
}



export function getUserRequest(name: string) : {
    type: string
    payload: string
} {
    return  {
        type: types.GET_USER_REQUEST,
        payload: name
    }
}

export function getUserSuccess(user: UserType) : {
    type: string
    payload: UserType
} {
    return  {
        type: types.GET_USER_SUCCESS,
        payload: user
    }
}

export function getUserFailure(error:string ) : {
    type: string
    payload:string
} {
    return  {
        type: types.GET_USER_REQUEST,
        payload: error
    }
}