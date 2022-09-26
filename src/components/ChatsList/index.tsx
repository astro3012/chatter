import React, { useCallback, useEffect, useState } from 'react'
import {
    Box,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Typography,
    Divider,
    Drawer,
    LinearProgress
} from '@mui/material'
import NotificationsPausedTwoToneIcon from '@mui/icons-material/NotificationsPausedTwoTone'
import { User } from '../../types/User'
import { faker } from '@faker-js/faker'
import { getCurrentUser } from '../../logic'
import AllContacts from '../AllContacts'
import ChatItem from './ChatItem'
import { useDispatch, useSelector } from 'react-redux'
import { setChatId, setAllChats } from '../../features/chat'
import { RootState } from '../../store'

const ChatsList: React.FC = () => {
    const chats = useSelector((state: RootState) => state.chat.allChats)
    const user = getCurrentUser()
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(
            'https://chat-sever-rust.herokuapp.com/chats/groups/a3e1263a-999e-4f45-a145-a184636def21'
        )
            .then(async (response) => await response.json())
            .then((usersList) => dispatch(setAllChats(usersList)))
            .catch((error) => console.log(error))
    }, [])

    const onClick = (chatId: string) => {
        dispatch(setChatId(chatId))
    }

    return (
        <>
            <Box overflow="auto" sx={{ bgcolor: 'customBg.main', height: '100%' }}>
                {chats.length === 0 ? (
                    <Box
                        height="100%"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center">
                        <NotificationsPausedTwoToneIcon
                            fontSize="large"
                            sx={{ width: '100%' }}
                            color="primary"
                        />
                        <Typography
                            sx={{ width: '100%', padding: '8px' }}
                            display="block"
                            textAlign="center"
                            component="span"
                            variant="h6"
                            color="text.primary">
                            No chats yet. Start a new one!
                        </Typography>
                    </Box>
                ) : (
                    <>
                        <List
                            sx={{
                                width: '100%'
                            }}>
                            {chats.map((chat) => (
                                <ChatItem key={chat.id} chat={chat} onClick={onClick} />
                            ))}
                        </List>
                        <Typography
                            sx={{ width: '100%', padding: '0 8px 8px 8px' }}
                            display="block"
                            textAlign="center"
                            component="span"
                            variant="body2"
                            color="text.primary">
                            You have reached end of your messages
                        </Typography>
                    </>
                )}
            </Box>
        </>
    )
}

export default ChatsList
