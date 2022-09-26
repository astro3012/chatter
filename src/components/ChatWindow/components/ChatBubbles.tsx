import React from 'react'
import { Box, Paper, TextField, Typography, useTheme } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid'
import SendIcon from '@mui/icons-material/Send'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import { Message } from '../../../types/Message'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

type ChatBubblesPropsType = {
    messages: Message[]
}

type ChatBubblePropsType = {
    message: Message
}

export const ChatBubble: React.FC<ChatBubblePropsType> = (props) => {
    const { message } = props
    const user = useSelector((state: RootState) => state.user.loggedInUser)
    const isUser = message.senderId === user.id
    const theme = useTheme()
    const isSenderCurrentUser = isUser
    const bgColors = {
        light: isUser ? 'primary.light' : '',
        dark: isUser ? 'primary.dark' : ''
    }
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: isSenderCurrentUser ? 'flex-end' : 'flex-start',
                my: '8px'
            }}>
            <Paper
                sx={{
                    maxWidth: '70%',
                    padding: '8px',
                    backgroundColor: bgColors[theme.palette.mode]
                }}
                elevation={0}>
                <Typography
                    variant="body1"
                    component="span"
                    align="center"
                    sx={{ wordWrap: 'break-word' }}>
                    {message.content}
                </Typography>
            </Paper>
        </Box>
    )
}

const ChatBubbles: React.FC<ChatBubblesPropsType> = (props) => {
    const { messages } = props
    console.log(messages)
    return (
        <Box width="100%" padding="16px" sx={{ flex: 1 }} overflow="auto">
            {messages.map((message) => (
                <ChatBubble message={message} key={message.id} />
            ))}
        </Box>
    )
}

export default ChatBubbles
