import React from 'react'
import { Box, Paper, TextField, Typography, useTheme } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid'
import SendIcon from '@mui/icons-material/Send'
import AttachFileIcon from '@mui/icons-material/AttachFile'

export const ChatBubble = ({ isUser }: { isUser: boolean }) => {
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
        <Typography variant="body1" component="span" align="center" sx={{ wordWrap: 'break-word' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </Paper>
    </Box>
  )
}

const ChatBubbles = () => {
  return (
    <Box width="100%" padding="16px" sx={{ flex: 1 }} overflow="auto">
      <ChatBubble isUser={false} />
      <ChatBubble isUser={false} />
      <ChatBubble isUser={true} />
      <ChatBubble isUser={true} />
      <ChatBubble isUser={true} />
      <ChatBubble isUser={false} />
      <ChatBubble isUser={false} />
      <ChatBubble isUser={true} />
      <ChatBubble isUser={false} />
      <ChatBubble isUser={false} />
      <ChatBubble isUser={true} />
      <ChatBubble isUser={true} />
      <ChatBubble isUser={true} />
      <ChatBubble isUser={false} />
      <ChatBubble isUser={false} />
      <ChatBubble isUser={true} />
      <ChatBubble isUser={false} />
      <ChatBubble isUser={false} />
      <ChatBubble isUser={true} />
      <ChatBubble isUser={true} />
      <ChatBubble isUser={true} />
      <ChatBubble isUser={false} />
      <ChatBubble isUser={false} />
      <ChatBubble isUser={true} />
      <ChatBubble isUser={false} />
      <ChatBubble isUser={false} />
      <ChatBubble isUser={true} />
      <ChatBubble isUser={true} />
      <ChatBubble isUser={true} />
      <ChatBubble isUser={false} />
      <ChatBubble isUser={false} />
      <ChatBubble isUser={true} />
    </Box>
  )
}

export default ChatBubbles
