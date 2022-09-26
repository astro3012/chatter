import { Container, createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { getDesignTokens } from '../theme'
import ChatWindow from './ChatWindow'
import ErrorAlert from './ErrorAlert'
import ListWindow from './ListWindow'
import UserLogin from './UserLogin'

const ChatLayout = () => {
    const [userFetchError, setUserFetchError] = useState('')
    const { user, mode, chatId } = useSelector((state: RootState) => ({
        user: state.user.loggedInUser,
        mode: state.theme.theme,
        chatId: state.chat.chatId
    }))

    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ErrorAlert errorMessage={userFetchError} />
            <Container maxWidth="xl" sx={{ height: '100vh', py: '12px', backgroundColor: 'paper' }}>
                <Grid
                    height="100%"
                    container
                    borderRadius="8px"
                    border="1px solid"
                    borderColor="customBorder.main">
                    {user != null ? (
                        <>
                            <Grid item xs={4} height="100%">
                                <ListWindow />
                            </Grid>
                            <Grid item xs={8} height="100%">
                                {chatId ? <ChatWindow /> : 'THIS IS NO CHAT'}
                            </Grid>
                        </>
                    ) : (
                        <UserLogin setUserFetchError={setUserFetchError} />
                    )}
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default ChatLayout
