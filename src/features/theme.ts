import { PaletteMode } from '@mui/material'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    theme: (localStorage.getItem('theme') as PaletteMode) || 'light'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<PaletteMode>) => {
            state.theme = action.payload
        }
    }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer
