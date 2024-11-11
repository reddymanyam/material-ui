import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import React from 'react'

const MuiNavbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <Stack direction="row" flexGrow={1}>
                <IconButton size='large' aria-label='logo' >
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant='h5' component="div">LOGO</Typography>
            </Stack>
            
            <Stack  direction="row" spacing={2}>
                <Button variant='contained' >Home</Button>
                <Button variant='contained'>Contact</Button>
                <Button variant='contained'>About</Button>
                <Button variant='contained'>Logout</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar
