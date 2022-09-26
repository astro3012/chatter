import { faker } from '@faker-js/faker'
import {
    ListItemButton,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Typography,
    Divider
} from '@mui/material'
import React from 'react'
import { User } from '../../types/User'

interface ChatItemPropsType {
    chat: User
    onClick: (chatId: string) => void
}

const ChatItem: React.FC<ChatItemPropsType> = (props) => {
    const { chat, onClick } = props
    return (
        <>
            <ListItemButton key={chat.id} alignItems="flex-start" onClick={() => onClick(chat.id)}>
                <ListItemAvatar>
                    <Avatar
                        key={`${chat.id}_avatar_image`}
                        variant="rounded"
                        src={faker.image.avatar()}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={chat.name}
                    primaryTypographyProps={{
                        fontSize: '16px',
                        fontWeight: 400
                    }}
                    secondary={
                        <>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.secondary">
                                {faker.lorem.sentence()}
                            </Typography>
                        </>
                    }
                />
            </ListItemButton>
            <Divider component="li" />
        </>
    )
}

export default ChatItem
