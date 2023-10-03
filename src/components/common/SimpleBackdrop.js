import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import {NotificationContext} from "../../App";
export default function SimpleBackdrop() {
    const notificationContextValues= React.useContext(NotificationContext);

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={notificationContextValues?.openBackDrop}

            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}