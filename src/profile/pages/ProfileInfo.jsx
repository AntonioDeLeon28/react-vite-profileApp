import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { GeneralProfile } from './GeneralProfile';
import { Posts } from './Posts';
import { Gallery } from './Gallery';
import { ToDo } from './ToDo';
import { Avatar, Button, IconButton, Menu, MenuItem } from '@mui/material';

export const ProfileInfo = () => {

  const drawerWidth = 240;
  const dataColor = '#BCB9B9';

  const navigate = useNavigate();

  const { users, currentUser, setCurrentUser } = useContext(AuthContext);

  const [menuItem, setMenuItem] = useState('Profile');
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const filterCurrentUser = users?.users?.filter(data => data.id != currentUser.id);

  useEffect(() => {
    if (currentUser === null) {
      navigate('/auth/profiles');
    }
  }, [])

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChangeCurrentUser = (data) => {
    setCurrentUser(data);
    navigate('/auth/profiles');
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleMenu = (data) => {
    setMenuItem(data);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        display="flex"
      >
        <Toolbar style={{ backgroundColor: '#FFFFFF' }} >

          <Typography variant="h6" component="div" style={{ color: '#000000' }} sx={{ flexGrow: 30 }} fontFamily='Arial'>
            {menuItem}
          </Typography>

          <Typography variant="h6" component="div" style={{ color: '#000000' }} sx={{ flexGrow: 1 }} >

            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={currentUser?.name} src={currentUser?.profilepicture} sx={{ mr: 2 }} /> <Typography variant='h6' fontFamily='Arial'>{currentUser?.name}</Typography>
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={() => { handleCloseUserMenu(); }}>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >

                  <Typography variant="h6" noWrap component="div" align='center' style={{ width: 250, height: 225 }}>

                    <Typography variant="h6" noWrap component="div" display="flex" justifyContent="center" >
                      <Avatar alt={currentUser?.name} src={currentUser?.profilepicture} sx={{ minWidth: 150, minHeight: 150 }} />
                    </Typography>

                    <Typography variant="h6" noWrap component="div" fontFamily='Arial'>
                      {currentUser?.name}
                    </Typography>

                    <Typography variant="h6" noWrap component="div" color={dataColor} fontFamily='Arial'>
                      {currentUser?.email}
                    </Typography>

                  </Typography>

                </Box>

              </MenuItem>

              {filterCurrentUser?.map((dir) => {
                return <>

                  <MenuItem onClick={() => { handleCloseUserMenu(); handleChangeCurrentUser(dir); }} sx={{ py: 0 }} >
                    <Avatar alt={dir.name} src={dir.profilepicture} sx={{ mr: 1 }} />
                    <ListItemText key={dir.id} primary={<Typography variant="h6" fontFamily='Arial'>{dir.name}</Typography>} />
                  </MenuItem>

                  <hr style={{ marginInline: 20 }} />

                </>
              })}

              <MenuItem onClick={() => { handleCloseUserMenu(); handleChangeCurrentUser(null); }} >

                <Button variant="contained" style={{ backgroundColor: '#D24620' }} >
                  Sign out
                </Button>

              </MenuItem>

            </Menu>

          </Typography>

        </Toolbar>

      </AppBar>


      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar style={{ backgroundColor: '#433FBD' }} />
        <Toolbar style={{ backgroundColor: '#433FBD' }} />
        <Toolbar style={{ backgroundColor: '#433FBD' }} />
        <Toolbar style={{ backgroundColor: '#433FBD' }} />

        <List style={{ backgroundColor: '#433FBD' }}>
          {['Profile', 'Posts', 'Gallery', 'ToDo'].map((text, index) => (
            <>
              <hr style={{ marginInline: 20 }} />
              <ListItem key={index} disablePadding >
                <ListItemButton onClick={() => handleMenu(text)}>
                  <ListItemIcon>
                  </ListItemIcon>

                  <ListItemText primary={<Typography variant="h6" fontFamily='Arial'>{text}</Typography>} style={{ color: '#FFFFFF', height: 25 }} sx={{ my: 1 }} />

                </ListItemButton>
              </ListItem>
            </>
          ))}
          <hr style={{ marginInline: 20 }} />
        </List>
        <Toolbar style={{ backgroundColor: '#433FBD' }} />
        <Toolbar style={{ backgroundColor: '#433FBD' }} />
        <Toolbar style={{ backgroundColor: '#433FBD' }} />
        <Toolbar style={{ backgroundColor: '#433FBD' }} />
        <Toolbar style={{ backgroundColor: '#433FBD' }} />
        <Toolbar style={{ backgroundColor: '#433FBD' }} />

      </Drawer>

      {
        (menuItem === 'Profile')
          ? <GeneralProfile />
          : (menuItem === 'Post')
            ? <Posts />
            : (menuItem === 'Gallery')
              ? <Gallery />
              : <ToDo />
      }

    </Box >
  );
}