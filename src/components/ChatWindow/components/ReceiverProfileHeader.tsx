import { faker } from '@faker-js/faker'
import React from 'react'
import { Avatar, CardHeader } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

const ReceiverProfileHeader: React.FC<any> = (props) => {
    const { name } = useSelector((state: RootState) =>
        state.chat.allChats.find((chat) => chat.id === state.chat.chatId)
    )
    return (
        <>
            <CardHeader
                sx={{ borderBottom: '1px solid', borderColor: 'customBorder.main' }}
                titleTypographyProps={{
                    fontSize: '20px',
                    fontWeight: 400
                }}
                avatar={
                    <Avatar variant="rounded" alt="Your profile image" src={faker.image.avatar()} />
                }
                title={name}
            />
        </>
    )
}

export default ReceiverProfileHeader
