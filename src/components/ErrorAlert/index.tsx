import { Snackbar, Alert } from '@mui/material'
import React from 'react'

type ErrorAlertPropsType = {
  errorMessage?: string
  handleClose?: () => void
}

const ErrorAlert: React.FC<ErrorAlertPropsType> = (props) => {
  const { errorMessage, handleClose } = props
  return (
    <Snackbar open={Boolean(errorMessage?.length)} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {errorMessage}
      </Alert>
    </Snackbar>
  )
}

export default ErrorAlert
