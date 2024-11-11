import { Box, Drawer, Typography } from '@mui/material'
import React from 'react'

const MuiDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {

    return (
        <>
            <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box p={2} width="250px" textAlign='center' role="presentation" >
                    <Typography variant='h5' component="div">
                        side panel
                    </Typography>
                </Box>
            </Drawer>
        </>
    )
}

export default MuiDrawer
