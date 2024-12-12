import { Close, Menu } from '@mui/icons-material';
import { AppBar, Box, IconButton, List, ListItem, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navPageList = [
    { title: 'About', link: '' },
    { title: 'Our Service', link: '' },
    { title: 'Contact Us', link: '' },
  ];

  const [ isMediumScreen, setIsMediumScreen ] = useState(false);
  useEffect(() => {
    const handleResize = () => {
    setIsMediumScreen(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

   const [isMenuOpen, setMenuOpen] = useState(false);
   const handleMenuToggle = () => {
       setMenuOpen(!isMenuOpen);
   };

  return (
    <div>
        <AppBar sx={{bgcolor: 'lightgray', padding: 0, paddingX: 5, boxShadow: 'none' }}>
            <Toolbar sx={{ width: '100%' ,display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <img src={'/logo.png'} alt="logo" />
                </Box>
                <Box>
                    {isMediumScreen ? (
                        <div>
                            {isMenuOpen ? (
                                <IconButton onClick={handleMenuToggle} sx={{ '&:hover': { color: 'white'}}}><Close/></IconButton>
                            ):(
                                <IconButton onClick={handleMenuToggle} sx={{ '&:hover': { color: 'white'}}}><Menu/></IconButton>
                            )}
                            
                            {isMenuOpen ? (
                                <Box className='nav-menu-box'>
                                    <List>
                                        {navPageList.map((item, index) => (
                                            <ListItem key={index} sx={{ width: 'fit-content'}}>
                                                <NavLink className='nav-page-link'>{item.title}</NavLink>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            ): null}
                        </div>
                    ):(
                        <List sx={{display: 'flex'}}>
                            {navPageList.map((item, index) => (
                                <ListItem key={index} sx={{ width: 'fit-content'}}>
                                    <NavLink className='nav-page-link'>{item.title}</NavLink>
                                </ListItem>
                            ))}
                        </List>
                    )}
                    
                </Box>
            </Toolbar>
        </AppBar>
    </div>
  )
}
