import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1" component="h2" gutterBottom>h1 heading</Typography>
        <Typography variant="h2" component="h2" gutterBottom>h2 heading</Typography>
        <Typography variant="h3" component="h2" gutterBottom>h3 heading</Typography>
        <Typography variant="h4" component="h2" gutterBottom>h4 heading</Typography>
        <Typography variant="h5" component="h2" gutterBottom>h5 heading</Typography>
        <Typography variant="h6" component="h2" gutterBottom>h6 heading</Typography>
        <Typography variant="h6" component="h2" gutterBottom>sub title 1</Typography>
        <Typography variant="h6" component="h2" gutterBottom>sub title 2</Typography>

        <Typography variant="body1" component="span" gutterBottom>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dolores ipsa, atque iure cumque iste facere incidunt beatae aliquam, illum earum. Accusamus mollitia repellendus alias reprehenderit beatae nisi illum ex.</Typography>
        <Typography variant="body2" component="span" gutterBottom>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora esse officia delectus ad? Rem inventore voluptates eveniet consequatur ullam eligendi quibusdam quis, nesciunt eaque pariatur illo atque hic provident esse?</Typography>

    </div>
  )
}

export default MuiTypography;
