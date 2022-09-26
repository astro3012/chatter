import React, { useState, useMemo } from 'react'
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material'
import { getDesignTokens } from './theme'
import { addUser, ColorModeContext } from './logic'
import store, { RootState } from './store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import ChatLayout from './components/ChatLayout'

const App = () => {
    return (
        <Provider store={store}>
            <ChatLayout />
        </Provider>
    )
}

export default App
