import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, List, ListItemAvatar, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

export const SelectProfile = () => {

  const navigate = useNavigate();

  const { users, currentUser, setCurrentUser } = useContext(AuthContext);

  useEffect(() => {

    if (currentUser != null) {
      navigate('/profileInfo');
    }

  }, [])

  const handleProfile = (user) => {
    setCurrentUser(user);
    navigate('/profileInfo');
  }

  return (
    <>

      <Box
        sx={{ bgcolor: '#433FBD', py: 5 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >

        <Card sx={{ minWidth: 600, maxWidth: 900, borderRadius: '26px' }} >

          <CardContent style={{ backgroundColor: '#BCB9B9' }}>

            <Typography component="div" style={{ backgroundColor: '#BCB9B9' }}>

              <Typography variant="h6" component="div" align="center" fontFamily='Arial' >
                Select an account
              </Typography>

            </Typography>

          </CardContent>

          <CardActions>

            <List
              sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >

              {users?.users?.map((dir) => {
                return <>

                  <ListItemButton>
                    <Avatar alt={dir.name} src={dir.profilepicture} sx={{ mr: 2 }} />
                    <ListItemText key={dir.id} primary={<Typography variant="h6" fontFamily='Arial'>{dir.name}</Typography>} onClick={() => handleProfile(dir)} />
                  </ListItemButton>

                  <hr />

                </>
              })}

            </List>

          </CardActions>

        </Card>

      </Box>

    </>
  )
}