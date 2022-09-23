import { faker } from '@faker-js/faker'
import React from 'react'
import { Avatar, CardHeader } from '@mui/material'

const ReceiverProfileHeader: React.FC<any> = (props) => {
  return (
    <>
      <CardHeader
        sx={{ borderBottom: '1px solid', borderColor: 'customBorder.main' }}
        titleTypographyProps={{
          fontSize: '20px',
          fontWeight: 400
        }}
        avatar={<Avatar variant="rounded" alt="Your profile image" src={faker.image.avatar()} />}
        // action={}
        title="Other user"
      />
    </>
  )
}

export default ReceiverProfileHeader
