import { Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'
import Draggable from 'react-draggable';

const MuiDialog = () => {
    const [isOpen, setIsOpen] = useState(false);

    const PaperComponent = (props) =>{
                return(
                    <Draggable  handle="#draggable-dialog-title"   cancel={'[class*="MuiDialogContent-root"]'}>
                             <Paper {...props} />
                    </Draggable>
                )        
    }
    return (
        <>
            <Button onClick={() => { setIsOpen(true) }} variant='contained' color='secondary' sx={{ position: "absolute", bottom: "2%", right: "2%" }}>Open Dialog</Button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} PaperComponent={PaperComponent}>
                <DialogTitle style={{cursor:"move"}} id="draggable-dialog-title">
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
