import React, { ChangeEvent, useState } from 'react'
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
    TextField,
    Typography,
    useFormControl
} from '@mui/material'
import { Ghost } from 'react-kawaii'
import { addUser } from '../logic'
import { login } from '../features/user'
import { useDispatch } from 'react-redux'

interface UserLoginPropsType {
    setUserFetchError: React.Dispatch<React.SetStateAction<string>>
}

const UserLogin: React.FC<UserLoginPropsType> = (props) => {
    const { setUserFetchError } = props

    const dispatch = useDispatch()

    const handleSave = async (userName: string) => {
        // const currentUserAdded = await addUser(userName)
        const currentUserAdded = {
            id: 'a3e1263a-999e-4f45-a145-a184636def21',
            name: 'Tanmay'
        }

        if (typeof currentUserAdded === 'string') {
            localStorage.removeItem('user')
            setUserFetchError(currentUserAdded)
        } else {
            localStorage.setItem('user', JSON.stringify(currentUserAdded))
            dispatch(login(currentUserAdded))
        }
    }

    const [userName, setUserName] = useState('')
    const [error, setError] = useState(false)

    const handleChange = (name: string) => {
        setError(false)
        setUserName(name)
    }

    const handleSubmit = () => {
        if (!(userName.length > 0)) {
            setError(true)
            return
        }
        setError(false)
        handleSave(userName)
    }

    return (
        <Stack spacing={2} margin="auto" alignItems="center">
            <Ghost size={200} mood="excited" color="#E0E4E8" />
            <Typography
                sx={{ width: '100%', padding: '8px' }}
                display="block"
                textAlign="center"
                component="span"
                variant="h3"
                color="text.primary">
                Hello user! Who are you?
            </Typography>
            <TextField
                error={error}
                margin="normal"
                id="name"
                label="Username"
                type="text"
                fullWidth
                variant="outlined"
                color="primary"
                value={userName}
                onChange={(event) => handleChange(event.target.value)}
            />
            <Button variant="contained" onClick={handleSubmit}>
                Let's chat!
            </Button>
        </Stack>
    )
}

export default UserLogin
