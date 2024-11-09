import { Box } from '@mui/system'
import React from 'react'

const MuiBoxs = () => {
  return (
    <>
      <Box sx={{
        backgroundColor: "green",
        color: "white",
        Padding: "16px",
        width: "150px",
        height: "150px",
        padding: "30px",
        margin: "30px",
        '&:hover': {
          backgroundColor: "black"
        }
      }}>
        Hello world..
      </Box>
    
    </>
  )
}

export default MuiBoxs
