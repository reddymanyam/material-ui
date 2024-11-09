import React, { useState } from 'react'
import { Box, MenuItem, Select } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';

const MuiSelect = () => {

    const[country, setCountry] = useState("");

  return (
   <Box sx={{minWidth:"100px", padding:"80px"}}>
     <InputLabel id="demo-simple-select-label">Country</InputLabel>
     <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="Country"
          onChange={e => setCountry(e.target.value)}
          autoWidth
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="PAK">Pakistan</MenuItem>
          <MenuItem value="BAN">Bangladesh</MenuItem>
        </Select>
   </Box>
  )
}

export default MuiSelect
