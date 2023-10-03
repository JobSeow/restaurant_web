import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {NotificationContext} from "../../App";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
    const notificationContextValues = React.useContext(NotificationContext);

    const handleClose = (event, reason) => {
        notificationContextValues.setSnackBarOpen(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={notificationContextValues.snackBarOpen} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={notificationContextValues?.snackBarStatus} sx={{ width: '100%' }}>
                    {notificationContextValues?.snackBarMessage??"Success"}
                </Alert>
            </Snackbar>
        </Stack>
    );
}