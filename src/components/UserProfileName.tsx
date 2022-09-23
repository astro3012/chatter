import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@mui/material'
import React, { ChangeEvent, useState } from 'react'

type UserProfileNamePropsType = {
  handleSave: (userName: string) => void
  openUsernameModal: boolean
}

const UserProfileName: React.FC<UserProfileNamePropsType> = (props) => {
  const [userName, setUserName] = useState('')

  const { handleSave, openUsernameModal } = props
  return (
    <Dialog open={openUsernameModal}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>Please enter your name</DialogContentText>
        <TextField
          error
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          color="primary"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            return
          }}>
          Cancel
        </Button>
        <Button onClick={() => handleSave(userName)}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}

export default UserProfileName
