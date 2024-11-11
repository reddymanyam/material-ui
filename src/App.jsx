import React, { useState } from 'react'
import Typographyui from './components/MuiTypography'
import MuiButton from './components/MuiButton'
import MuiTextfields from './components/MuiTextfields'
import MuiSelect from './components/MuiSelect'
import MuiCheckbox from './components/MuiCheckbox'
import MuiBoxs from './components/MuiBoxs'
import MuiGrids from './components/MuiGrids'
import MuiCard from './components/MuiCard'
import MuiNavbar from './components/MuiNavbar'
import MuiBreadcrumbs from './components/MuiBreadcrumbs'
import MuiDrawer from './components/MuiDrawer'

const App = () => {
  const[isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
    {/* <Typographyui /> */}
    {/* <MuiButton /> */}
    {/* <MuiTextfields /> */}
    {/* <MuiSelect /> */}
    {/* <MuiCheckbox /> */}
    {/* <MuiBoxs /> */}
    {/* <MuiGrids /> */}
    {/* <MuiCard /> */}
    <MuiNavbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    <MuiBreadcrumbs />
    <MuiDrawer  isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>
    </>
  )
}

export default App
