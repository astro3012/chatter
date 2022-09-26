import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid'
import SendIcon from '@mui/icons-material/Send'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

const ChatInput: React.FC<any> = () => {
    const [message, setMessage] = useState<string>('')
    const { userId, chatId } = useSelector((state: RootState) => ({
        userId: state.user.loggedInUser.id,
        chatId: state.chat.chatId
    }))

    const onSend = () => {
        fetch('https://chat-sever-rust.herokuapp.com/chats/messages/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: message,
                sender_id: userId,
                group_id: chatId
            })
        })
            .then((response) => response.json())
            .then(() => setMessage(''))
            .catch((error) => console.log(error))
    }
    return (
        <Box
            sx={{
                borderBottomRightRadius: '8px',
                borderTop: '1px solid',
                borderColor: 'customBorder.main'
            }}
            width="100%"
            padding="16px">
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid xs={10}>
                    <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        color="primary"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                    />
                </Grid>
                <Grid xs={1}>
                    <AttachFileIcon fontSize="large" sx={{ width: '100%' }} />
                </Grid>
                <Grid xs={1}>
                    <SendIcon fontSize="large" sx={{ width: '100%' }} onClick={onSend} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default ChatInput
