import React, {FC, ReactElement, ReactNode} from 'react';
import {useStylesSignIn} from "../pages/SignIn";
import {Dialog, DialogContent, DialogTitle, IconButton} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

interface ModalWindowProps {
    title: string;
    children: ReactNode;
    classes?: ReturnType<typeof useStylesSignIn>;
    visible?: boolean;
    onClose: () => void;
}

export const ModalWindow: FC<ModalWindowProps> = ({
        title,
        children,
        classes,
        visible,
        onClose
    }: ModalWindowProps): ReactElement | null => {

    if(!visible) {
        return null;
    }

    return (
        <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                <IconButton onClick={onClose} color="secondary" aria-label="close">
                    <CloseIcon style={{ fontSize: 26 }} color="secondary" />
                </IconButton>
                {title}
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
        </Dialog>

    );
};
