import React from 'react'
import { Box, Toolbar, Typography } from '@mui/material'

export const ToDo = () => {

  const dataColor = '#BCB9B9';

  return (
    <>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >

        <Toolbar />

        <br />

        <Typography variant="h1" noWrap component="div" align="center" color={dataColor} sx={{ mt: '10%' }} fontFamily='Arial'>
          Coming Soon
        </Typography>

      </Box>

    </>
  )
}
