/* match de todos os reducers da aplicacao */

import { combineReducers } from 'redux'

import { userReducer } from './user';

const rootReducer = combineReducers({
    userReduce: userReducer
    }
)

export default rootReducer;