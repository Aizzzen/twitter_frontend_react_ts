import React, {FC, ReactElement} from 'react';
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {ModalWindow} from "../../../components/ModalWindow";
import {useStylesSignIn} from "../index";

interface RegisterModalProps {
    open: boolean;
    onClose: () => void;
}

export const RegisterModal: FC<RegisterModalProps> = ({open, onClose}: RegisterModalProps): ReactElement => {
    const classes = useStylesSignIn()

    return (
        <ModalWindow
            visible={open}
            onClose={onClose}
            classes={classes}
            title="Создайте учетную запись">
            <FormControl
                className={classes.loginFormControl}
                component="fieldset"
                fullWidth
            >
                <FormGroup aria-label="position" row>
                    <TextField
                        className={classes.registerField}
                        autoFocus
                        id="email"
                        label="E-Mail"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        className={classes.registerField}
                        autoFocus
                        id="username"
                        label="Имя пользователя"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        className={classes.registerField}
                        autoFocus
                        id="password"
                        label="Пароль"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        type="password"
                        fullWidth
                    />
                    <TextField
                        className={classes.registerField}
                        autoFocus
                        id="re_password"
                        label="Повторите пароль"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        type="password"
                        fullWidth
                    />
                    <Button variant="contained" color="primary" fullWidth>
                        Далее
                    </Button>
                </FormGroup>
            </FormControl>
        </ModalWindow>
    );
};
