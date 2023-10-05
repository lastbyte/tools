import React from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import {useDispatch, useSelector} from "react-redux";
import {setIsNotificationIsOpen} from "@redux/reducers/noitificationReducer";


const NotificationBar = ()  => {
    const open = useSelector((state: any) => state.notification.isOpen);
    const notificationMessage = useSelector((state : any) => state.notification.message);
    const dispatch = useDispatch();
    const handleClose = () => {
        console.log("closing");
        dispatch(setIsNotificationIsOpen(false));
    };

    return (
        <Box sx={(theme) =>({ width: 500, background : theme.palette.success.light,borderRadius : theme.spacing(1) })}>
            <Snackbar
                ContentProps={{ sx : (theme) =>({background : theme.palette.success.light, borderRadius : theme.spacing(1) })}}
                sx={(theme) =>({background : theme.palette.success.light,borderRadius : theme.spacing(1) })}
                anchorOrigin={{ vertical :  'top', horizontal :'right' }}
                open={open}
                onClose={() => handleClose()}
                autoHideDuration={1000}
                message={notificationMessage}
            />
        </Box>
    );
}

export default NotificationBar;