import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {NotificationContext} from "../../App";

export default function AlertDialog() {
    const notificationContextValues = React.useContext(NotificationContext);



    const handleClose = () => {
        notificationContextValues?.setDialogOpen(false)
    };

    return (
        <div>

            <Dialog
                open={notificationContextValues?.dialogOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogContent   style={{width:'500px',display:'flex',
                    justifyContent: 'center'}}>
                    <h1>
                        {notificationContextValues?.dialogMessage}
                    </h1>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}