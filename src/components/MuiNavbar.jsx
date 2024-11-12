import { AppBar, Button, IconButton, Menu, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';


const MuiNavbar = ({setIsDrawerOpen}) => {
  return (
    <AppBar>
        <Toolbar>
        <IconButton edge='start' onClick={()=>setIsDrawerOpen(true)}>
            <MenuIcon />
        </IconButton>
            <Stack direction="row" flexGrow={1} alignItems="center">
               <img src='https://marketplace.canva.com/EAFxdcos7WU/1/0/1600w/canva-dark-blue-and-brown-illustrative-fitness-gym-logo-oqe3ybeEcQQ.jpg' alt='logo' style={{height:"50px", width:"50px", borderRadius:"50%"}}/>
                <Typography variant='h5' component="div" fontWeight="bold">FITFLIX</Typography>
            </Stack>
            
            <Stack  direction="row" spacing={2}>
                <Button variant='text'  color='inherit' sx={{'&:hover':{backgroundColor:"lightcoral"}}}>Home</Button>
                <Button variant='text' color='inherit' sx={{'&:hover':{backgroundColor:"lightcoral"}}}>Contact</Button>
                <Button variant='text' color='inherit' sx={{'&:hover':{backgroundColor:"lightcoral"}}}>About</Button>
                <Button variant='contained' sx={{backgroundColor:"coral"}} >SIGNIN</Button>
            </Stack>
            <Menu>
                
            </Menu>
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar
