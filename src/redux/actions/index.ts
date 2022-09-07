import * as types from '../types'


export type UserType = {
    name:string,
    avatar: string
}



export function getUserRequest(name: string) : {
    type: string
    playload: string
} {
    return  {
        type: types.GET_USER_REQUEST,
        playload: name
    }
}

export function getUserSuccess(user: UserType) : {
    type: string
    playload: UserType
} {
    return  {
        type: types.GET_USER_SUCCESS,
        playload: user
    }
}

export function getUserFailure( ) : {
    type: string
} {
    return  {
        type: types.GET_USER_REQUEST,
    }
}