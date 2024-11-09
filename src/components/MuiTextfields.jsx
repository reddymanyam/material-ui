import { Stack, TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import React from 'react'

const MuiTextfields = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Stack spacing={4} sx={{ padding: "50px" }}>
      <Stack direction="row" spacing={2}>
        <TextField label="name" variant='outlined' />
        <TextField label="name" variant='filled' />
        <TextField label="name" variant='standard' />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="form input" size='small' required />
        <TextField label="this is the example of helper text" helperText="this is the example of helper text" />
        <TextField label="password" type='password' helperText="enter your password" color='secondary' />
        <TextField label="read only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label="enter address" multiline maxRows={5} required helperText="multi line" />
        <TextField
        id="input-with-icon-textfield"
        label="TextField"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          },
        }}
        variant="standard"
      />
      <TextField
        id="input-with-icon-textfields"
        label="TextField"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            ),
          },
        }}
        variant="standard"
      />
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
      </Stack>
    </Stack>
  )
}

export default MuiTextfields

