import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user'
import themeReducer from './features/theme'
import chatReducer from './features/chat'

const store = configureStore({
    reducer: { user: userReducer, theme: themeReducer, chat: chatReducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
