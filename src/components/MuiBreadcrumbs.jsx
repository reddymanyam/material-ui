import { NavigateNextRounded } from '@mui/icons-material'
import { Breadcrumbs, Link, Stack } from '@mui/material'
import React from 'react'

const MuiBreadcrumbs = () => {
  return (
    <Stack margin="80px">
        <Breadcrumbs aria-label='breadcrumbs' separator={<NavigateNextRounded />} maxItems={3}>
        <Link  color='success' href="/">Home</Link>
        <Link underline='hover' href="#" >About</Link>
        <Link underline='hover' color='secondary' href="#">Contact</Link>
        <Link  color='success' href="#">Help</Link>
        <Link underline='hover' href="#" >Widget</Link>
        <Link underline='hover' color='secondary' href="#">Statistics</Link>
        </Breadcrumbs>
    </Stack>
  )
}

export default MuiBreadcrumbs
