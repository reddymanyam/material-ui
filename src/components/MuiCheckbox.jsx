import { FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'

const MuiCheckbox = () => {
  return (
    <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    <FormControlLabel required control={<Checkbox />} label="Required" />
    <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
  </FormGroup>
  )
}

export default MuiCheckbox
