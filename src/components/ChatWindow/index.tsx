import React, { useCallback, useEffect, useRef, useState } from 'react'
import _ from 'lodash'
import { Box } from '@mui/material'
import NotificationsPausedTwoToneIcon from '@mui/icons-material/NotificationsPausedTwoTone'
import ChatInput from './components/ChatInput'
import ChatBubbles from './components/ChatBubbles'
import ReceiverProfileHeader from './components/ReceiverProfileHeader'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Message } from '../../types/Message'
import { camelCaseConverter } from '../../logic'

const ChatWindow: React.FC<any> = () => {
    const [messages, setMessages] = useState<Message[]>([])
    const wsClient = useRef(null)
    const chatId = useSelector((state: RootState) => state.chat.chatId)
    const user = useSelector((state: RootState) => state.user.loggedInUser)

    useEffect(() => {
        fetch(`https://chat-sever-rust.herokuapp.com/chats/messages/${chatId}`, {
            headers: {
                'x-user-id': user.id
            }
        })
            .then(async (response) => await response.json())
            .then((response) => response.map((mesage) => camelCaseConverter(mesage) as Message))
            .then((messagesList) => setMessages(messagesList))
            .catch((error) => console.log(error))
    }, [chatId, user])

    useEffect(() => {
        const socket = new WebSocket(
            `wss://chat-sever-rust.herokuapp.com/chats/messages/${chatId}/${user.id}/ws`
        )
        socket.onmessage = (message) => {
            const convertedMessage = camelCaseConverter(JSON.parse(message.data)) as Message
            setMessages((prev) => [...prev, convertedMessage])
        }
        socket.onopen = () => {
            console.log('ws opened')
            // setWebSocket(wsClient)
        }
        socket.onclose = () => console.log('ws closed')

        wsClient.current = socket

        return () => {
            socket.close()
        }
    }, [chatId, user])

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
            <ReceiverProfileHeader />
            <ChatBubbles messages={messages} />
            <ChatInput />
        </Box>
    )
}

export default ChatWindow
