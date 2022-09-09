import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getUser } from '../../actions/user';

export type UserType = {
    name: string,
    email: string
}

interface UserState {
    user: UserType[],
    loading: boolean,
    error: any
}

const initialState: UserState = {
    user: [],
    loading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state:any) => {
            state.loading = true
            state.error = ''
        }),
        builder.addCase(getUser.fulfilled, (state, {payload}) => {
            state.loading = false,
            state.user = payload
        }),
        builder.addCase(getUser.rejected, (state, {payload}) => {
            state.loading = false,
            state.error = payload
         })
    }


})

//export const { } = userSlice.actions

export default userSlice.reducer