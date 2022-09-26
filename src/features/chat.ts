import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../types/User'

const initialState = {
    chatId: null as string | null,
    allChats: [] as User[]
}

const chatSlice = createSlice({
    name: 'chat',
    initialState: initialState,
    reducers: {
        setChatId: (state, action: PayloadAction<string>) => {
            state.chatId = action.payload
        },
        setAllChats: (state, action: PayloadAction<User[]>) => {
            state.allChats = action.payload
        }
    }
})

export const { setChatId, setAllChats } = chatSlice.actions

export default chatSlice.reducer
