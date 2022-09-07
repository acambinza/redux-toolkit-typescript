/* estado inicial e as actions do user */

import { UserType } from "../../actions";
import * as types from '../../types';


interface UserState {
    user: UserType,
    loading: boolean,
    error: string
}

const initialState: UserState = {
    user: {
        name: '',
        avatar: ''
    },
    loading: false,
    error: ''
}

export const userReducer = (state = initialState, action: {
    type: string,
    payload: UserType
}) => {
    switch (action.type) {
        case types.GET_USER_REQUEST:
            return {
                ...state,
                loading: true,
                user: action.payload,
                error: ''
            }
        case types.GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: ''
            }
        case types.GET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default: return state
    }

}