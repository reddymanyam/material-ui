import { Skeleton, Stack } from '@mui/material'
import React from 'react'

const MuiSkeleton = () => {
  return (
   <Stack spacing={1} width={250} marginLeft={4}>
    <Skeleton variant='circular' width={40} height={40} />
    <Skeleton variant='text' />
    <Skeleton variant='rectangle' width={250} height={150} />
   </Stack>
  )
}

export default MuiSkeleton
