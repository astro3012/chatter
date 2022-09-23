import React from 'react'
import { Box, TextField } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid'
import SendIcon from '@mui/icons-material/Send'
import AttachFileIcon from '@mui/icons-material/AttachFile'

const ChatInput: React.FC<any> = () => {
  return (
    <Box
      sx={{
        borderBottomRightRadius: '8px',
        borderTop: '1px solid',
        borderColor: 'customBorder.main'
      }}
      width="100%"
      padding="16px">
      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid xs={10}>
          <TextField label="Message" variant="outlined" fullWidth color="primary" />
        </Grid>
        <Grid xs={1}>
          <AttachFileIcon fontSize="large" sx={{ width: '100%' }} />
        </Grid>
        <Grid xs={1}>
          <SendIcon fontSize="large" sx={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ChatInput
