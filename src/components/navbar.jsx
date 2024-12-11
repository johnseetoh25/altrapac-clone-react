import { Menu } from '@mui/icons-material';
import { AppBar, Box, Toolbar } from '@mui/material'
import React, { useState } from 'react'

export default function Navbar() {
  const [ isMediumScreen, setIsMediumScreen ] = useState(false);

  return (
    <div>
        <AppBar sx={{bgcolor: 'lightgray', padding: 0, paddingX: 5 }}>
            <Toolbar sx={{ width: '100%' ,display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <img src={'/logo.png'} alt="logo" />
                </Box>
                <Box>
                    <Menu/>
                </Box>
            </Toolbar>
        </AppBar>
    </div>
  )
}
