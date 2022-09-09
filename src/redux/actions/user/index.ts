import { createAsyncThunk } from '@reduxjs/toolkit';

export type UserType = {
    name: string,
    email: string
}

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

export const getUser = createAsyncThunk<UserType[], any, {}>(
    'user/list',
    async () => {
        try {
            console.log('get data')
            const repo = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const result = await repo.json()
            return result

        } catch (error) {
            return error;
        }
    }
)