import React, { useCallback, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import NotificationsPausedTwoToneIcon from '@mui/icons-material/NotificationsPausedTwoTone'
import ChatInput from './components/ChatInput'
import ChatBubbles from './components/ChatBubbles'
import ReceiverProfileHeader from './components/ReceiverProfileHeader'

const ChatWindow: React.FC<any> = () => {
  const [messages, setMessages] = useState<unknown[]>()

  const getMessages = useCallback(async () => {
    fetch(
      'https://chat-sever-rust.herokuapp.com/chats/messages/c6271f7a-264e-4049-a762-4f2b6ca8039e',
      {
        headers: {
          'x-user-id': 'a3e1263a-999e-4f45-a145-a184636def21'
        }
      }
    )
      .then((response) => response.json())
      .then((messagesList) => setMessages(messagesList))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    getMessages()
  }, [])

  console.log(messages)
  return (
    <Box
      width="100%"
      height="100%"
      borderRadius="0 8px 8px 0"
      sx={{
        backgroundColor: 'customBg.main'
      }}
      display="flex"
      flexDirection="column">
      {/* {
        <Box height="100%" display="flex" flexDirection="column" justifyContent="center">
          <NotificationsPausedTwoToneIcon
            sx={{ width: '100%', fontSize: '100px' }}
            color="primary"
          />
        </Box>
      } */}
      <ReceiverProfileHeader />
      <ChatBubbles />
      <ChatInput />
    </Box>
  )
}

export default ChatWindow
