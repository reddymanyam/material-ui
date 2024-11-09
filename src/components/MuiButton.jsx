import React from 'react'
import { Button, IconButton, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const MuiButton = () => {
  return (

    <Stack spacing={4} sx={{margin:"30px"}}>

      <Stack direction="row" spacing={2}>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>

      <Stack direction='row' spacing={2}>
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='contained' color='secondary'>Secondary</Button>
        <Button variant='contained' color='error'>Error</Button>
        <Button variant='contained' color='warning'>Warning</Button>
        <Button variant='contained' color='info' disabled >Info</Button>
        <Button variant='contained' color='success' onClick={() => alert("clicked")}>Success</Button>
      </Stack>

      <Stack display="block" direction="row" spacing={2}>
        <Button variant='contained' size='small' disableRipple>Small</Button>
        <Button variant='contained' size='medium'>Medium</Button>
        <Button variant='contained' size='large'>Large</Button>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<DeleteIcon fontSize='small' />} >
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <IconButton aria-label='send'>
          <SendIcon />
        </IconButton>
      </Stack>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => console.log(event.target.files)}
          multiple
        />
      </Button>
      <ButtonGroup variant='contained' aria-label='basic button'>
        <Button size='small'>Left</Button>
        <Button size='medium' color='success'>Center</Button>
        <Button size='large' color='secondary'>Right</Button>
      </ButtonGroup>
    </Stack>

  )
}

export default MuiButton;
