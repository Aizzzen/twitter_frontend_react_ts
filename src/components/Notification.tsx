import Snackbar from '@material-ui/core/Snackbar';
import Alert, { Color } from '@material-ui/lab/Alert';
import React, {FC, ReactElement, useState} from 'react'

interface NotificationProps {
    children: (callback: (text: string, type: Color) => void) => ReactElement;
}

export const Notification: FC<NotificationProps> = ({ children }): ReactElement => {
    const [open, setOpen] = useState<boolean>(false);
    const [notificationObj, setNotificationObj] = useState<{ text: string; type: Color }>();

    const openNotification = (text: string, type: Color) => {
        setNotificationObj({
            text,
            type
        });
        setOpen(true);
    }

    return (
        <>
            {children(openNotification)}
            <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity={notificationObj?.type}>
                    {notificationObj?.text}
                </Alert>
            </Snackbar>
        </>
    )
}
