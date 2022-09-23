import { faker } from '@faker-js/faker'
import React, { useCallback, useEffect, useState } from 'react'
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material'
import { getCurrentUser } from '../../logic'
import { User } from '../../types/User'

type AllContactsPropsType = {
  openContactsList: boolean
  toggleContactsDialog: (open: boolean) => void
}

const AllContacts: React.FC<AllContactsPropsType> = (props) => {
  const { openContactsList, toggleContactsDialog } = props
  const [contacts, setContacts] = useState<User[]>([])

  const handleOk = () => {
    toggleContactsDialog(false)
  }

  const handleCancel = () => {
    toggleContactsDialog(false)
  }

  const getContacts = useCallback(async () => {
    fetch('https://chat-sever-rust.herokuapp.com/chats/users')
      .then((response) => response.json())
      .then((usersList) => setContacts(usersList))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    getContacts()
  }, [])

  return (
    <Dialog fullWidth maxWidth="sm" open={openContactsList}>
      <DialogTitle>All contacts</DialogTitle>
      <DialogContent sx={{ padding: 0 }} dividers>
        {contacts.map((data) => (
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar variant="rounded" src={faker.image.avatar()} />
            </ListItemAvatar>
            <ListItemText
              primary={data.name}
              primaryTypographyProps={{
                fontSize: '16px',
                fontWeight: 400
              }}
            />
          </ListItem>
        ))}
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleOk}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AllContacts
