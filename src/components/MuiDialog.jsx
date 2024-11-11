import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'
const MuiDialog = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => { setIsOpen(true) }} variant='contained' color='secondary' sx={{ position: "absolute", bottom: "2%", right: "2%" }}>Open Dialog</Button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <DialogTitle>
                    Submit the test?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to submit the test, you will not able to edit the test after submitting...
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button onClick={() => setIsOpen(false)}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default MuiDialog
