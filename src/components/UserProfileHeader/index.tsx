import { faker } from '@faker-js/faker'
import React, { useState } from 'react'
import { Avatar, CardHeader, PaletteMode, Stack, useTheme } from '@mui/material'
import UserProfileMenu from './components/UserProfileMenu'
import { getCurrentUser } from '../../logic'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../../features/theme'
import { ThemeSwitch } from './components/ThemeSwitch'
import { RootState } from '../../store'

interface UserProfileHeaderPropsType {
    toggleContactsDialog: (open: boolean) => void
}

const UserProfileHeader: React.FC<UserProfileHeaderPropsType> = (props) => {
    const { toggleContactsDialog } = props

    const storedMode = useSelector((state: RootState) => state.theme.theme)
    const [mode, setMode] = useState<PaletteMode>(storedMode.length > 0 ? storedMode : 'light')
    const theme = useTheme()
    console.log(theme.palette.mode)
    const dispatch = useDispatch()

    const toggleColorMode = () => {
        const nextMode = mode === 'light' ? 'dark' : 'light'
        setMode(nextMode)
        localStorage.setItem('theme', nextMode)
        dispatch(changeTheme(nextMode))
    }

    const user = getCurrentUser()
    return (
        <>
            <CardHeader
                sx={{
                    borderBottom: '1px solid',
                    borderColor: 'customBorder.main',
                    alignItems: 'center'
                }}
                titleTypographyProps={{
                    fontSize: '20px',
                    fontWeight: 400
                }}
                avatar={
                    <Avatar variant="rounded" alt="Your profile image" src={faker.image.avatar()} />
                }
                action={
                    <Stack direction="row" spacing={1} alignItems="center" alignSelf="center">
                        <ThemeSwitch
                            checked={mode === 'dark'}
                            theme={theme}
                            onClick={toggleColorMode}
                        />
                        <UserProfileMenu toggleDrawer={toggleContactsDialog} />
                    </Stack>
                }
                title={user?.name ?? ''}
            />
        </>
    )
}

export default UserProfileHeader
