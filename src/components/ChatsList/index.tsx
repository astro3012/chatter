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

interface ContactsListPropsType {}

const ChatsList: React.FC<ContactsListPropsType> = (props) => {
  const [chats, setChats] = useState<User[]>([])
  const user = getCurrentUser()

  const getUsers = useCallback(async () => {
    // fetch(`https://chat-sever-rust.herokuapp.com/chats/groups/${user?.id}`)
    fetch('https://chat-sever-rust.herokuapp.com/chats/groups/a3e1263a-999e-4f45-a145-a184636def21')
      .then((response) => response.json())
      .then((usersList) => setChats(usersList))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <Box overflow="auto" sx={{ bgcolor: 'customBg.main', height: '100%' }}>
        {!chats.length ? (
          <Box height="100%" display="flex" flexDirection="column" justifyContent="center">
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
              {chats.map((data) => (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar variant="rounded" src={faker.image.avatar()} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={data.name}
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
                  </ListItem>
                  <Divider component="li" />
                </>
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
