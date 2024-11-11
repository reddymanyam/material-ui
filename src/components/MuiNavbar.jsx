import { AppBar, Button, IconButton, Menu, Stack, Toolbar, Typography } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';


const MuiNavbar = ({setIsDrawerOpen}) => {
  return (
    <AppBar>
        <Toolbar>
        <IconButton edge='start' onClick={()=>setIsDrawerOpen(true)}>
            <MenuIcon />
        </IconButton>
            <Stack direction="row" flexGrow={1}>
                <IconButton size='large' aria-label='logo' >
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant='h5' component="div">LOGO</Typography>
            </Stack>
            
            <Stack  direction="row" spacing={2}>
                <Button variant='contained'  color='secondary'>Home</Button>
                <Button variant='contained' color='secondary'>Contact</Button>
                <Button variant='contained' color='secondary'>About</Button>
                <Button variant='contained' color='secondary'>Logout</Button>
            </Stack>
            <Menu>
                
            </Menu>
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar
