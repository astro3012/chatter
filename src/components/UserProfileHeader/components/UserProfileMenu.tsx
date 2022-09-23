import React, { useContext, useState } from 'react'
import { IconButton, Menu, MenuItem, useTheme } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ColorModeContext } from '../../../logic'

interface UserProfileMenuPropsType {
  toggleDrawer: (open: boolean) => void
}

const UserProfileMenu: React.FC<UserProfileMenuPropsType> = (props) => {
  const { toggleDrawer } = props
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null)
  const { toggleColorMode } = useContext(ColorModeContext)
  const theme = useTheme()

  const menuOpen = Boolean(menuAnchor)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget)
  }
  const handleClose = () => {
    setMenuAnchor(null)
  }
  return (
    <>
      <IconButton
        aria-label="settings"
        onClick={handleClick}
        sx={{
          margin: '4px 8px 4px 0'
        }}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={menuAnchor}
        open={menuOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}>
        <MenuItem onClick={() => toggleDrawer(true)}>Contacts</MenuItem>
        <MenuItem onClick={toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon sx={{ marginRight: '8px' }} />
          ) : (
            <Brightness4Icon sx={{ marginRight: '8px' }} />
          )}
          {theme.palette.mode} mode
        </MenuItem>
      </Menu>
    </>
  )
}

export default UserProfileMenu
