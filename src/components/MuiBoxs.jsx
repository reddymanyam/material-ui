import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const MuiBoxs = () => {
  return (
    <Paper sx={{
      width: "150px",
      height: "150px",
      margin: "30px", backgroundColor: "blue"
    }} elevation={6}>

      <Box sx={{
        backgroundColor: "green",
        color: "white",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        '&:hover': {
          backgroundColor: "black"
        },
        transition:"0.8s",
       
      }}>
        <Box sx={{padding:"50px"}}>
          Reddy
        </Box>

      </Box>

    </Paper>
  )
}

export default MuiBoxs
