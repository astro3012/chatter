import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../types/User'

const initialState = {
    loggedInUser: JSON.parse(localStorage.getItem('user')) as User | null
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.loggedInUser = action.payload
        }
    }
})

export const { login } = userSlice.actions

export default userSlice.reducer
