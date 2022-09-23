import { faker } from '@faker-js/faker'
import React from 'react'
import { Avatar, CardHeader } from '@mui/material'
import UserProfileMenu from './components/UserProfileMenu'
import { User } from '../../types/User'
import { getCurrentUser } from '../../logic'

interface UserProfileHeaderPropsType {
  toggleContactsDialog: (open: boolean) => void
}

const UserProfileHeader: React.FC<UserProfileHeaderPropsType> = (props) => {
  const { toggleContactsDialog } = props
  const user = getCurrentUser()
  return (
    <>
      <CardHeader
        sx={{ borderBottom: '1px solid', borderColor: 'customBorder.main' }}
        titleTypographyProps={{
          fontSize: '20px',
          fontWeight: 400
        }}
        avatar={<Avatar variant="rounded" alt="Your profile image" src={faker.image.avatar()} />}
        action={<UserProfileMenu toggleDrawer={toggleContactsDialog} />}
        title={user?.name || ''}
      />
    </>
  )
}

export default UserProfileHeader
