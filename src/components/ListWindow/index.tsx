import React, { useState } from 'react'
import { Box } from '@mui/material'
import UserProfileHeader from '../UserProfileHeader'
import ChatsList from '../ChatsList'
import { User } from '../../types/User'
import AllContacts from '../AllContacts'

interface ListWindowPropsType {
    // users: User[]
}

const ListWindow: React.FC<ListWindowPropsType> = (props) => {
    const [showContacts, setShowContacts] = useState(false)

    const toggleContactsDialog = (open: boolean) => {
        setShowContacts(open)
    }

    return (
        <Box
            borderRadius="8px 0 0 8px"
            borderRight="1px solid"
            borderColor="customBorder.main"
            height="100%"
            display="flex"
            flexDirection="column"
            overflow="hidden">
            <UserProfileHeader toggleContactsDialog={toggleContactsDialog} />
            <ChatsList />
            <AllContacts
                openContactsList={showContacts}
                toggleContactsDialog={toggleContactsDialog}
            />
        </Box>
    )
}

export default ListWindow
