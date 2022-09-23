// import { io } from 'socket.io-client'
import React, { useState, useMemo, ChangeEvent, useEffect, useCallback, createContext } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'
import ListWindow from './components/ListWindow'
import ChatWindow from './components/ChatWindow'
import { createTheme, CssBaseline, PaletteMode, Paper, ThemeProvider } from '@mui/material'
import { getDesignTokens } from './theme'
import { addUser, ChatDataContext, ColorModeContext } from './logic'
import UserProfileName from './components/UserProfileName'
import { User } from './types/User'
import ErrorAlert from './components/ErrorAlert'

const getCurrentUser = () => {
  const currentUser = localStorage.getItem('user')
  return currentUser ? JSON.parse(currentUser) : null
}

const App = () => {
  const [mode, setMode] = useState<PaletteMode>('light')
  const [user, setUser] = useState<User | null>(getCurrentUser)
  const [error, setError] = useState('')

  const handleUserNameSave = async (userName: string) => {
    const currentUserAdded = await addUser(userName)

    if (typeof currentUserAdded === 'string') {
      localStorage.removeItem('user')
      setError(currentUserAdded)
    } else {
      localStorage.setItem('user', JSON.stringify(currentUserAdded))
      setUser(currentUserAdded)
    }
  }

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorAlert errorMessage={error} />
        {/* <ChatDataContext.Provider value={null}> */}
        <UserProfileName openUsernameModal={!user} handleSave={handleUserNameSave} />
        <Container maxWidth="xl" sx={{ height: '100vh', py: '12px', backgroundColor: 'paper' }}>
          <Grid
            height="100%"
            container
            borderRadius="8px"
            border="1px solid"
            borderColor="customBorder.main">
            <Grid xs={4} height="100%">
              <ListWindow />
            </Grid>
            <Grid xs={8} height="100%">
              <ChatWindow />
            </Grid>
          </Grid>
        </Container>
        {/* </ChatDataContext.Provider> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
