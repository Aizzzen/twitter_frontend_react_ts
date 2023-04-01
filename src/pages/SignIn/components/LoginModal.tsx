import React, {FC, ReactElement} from 'react';
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {ModalWindow} from "../../../components/ModalWindow";
import {useStylesSignIn} from "../index";
import * as yup from 'yup';
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Notification} from "../../../components/Notification";
import {Color} from "@material-ui/lab/Alert";
import {useDispatch, useSelector} from "react-redux";
import {LoadingStatus} from "../../../store/types";
import {fetchSignIn} from "../../../store/ducks/user/actionCreators";
import {selectUserStatus} from "../../../store/ducks/user/selectors";

interface LoginModalProps {
    open: boolean;
    onClose: () => void;
}

const LoginFormSchema = yup.object().shape({
    username: yup.string().required('Введите имя пользователя'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required(),
})

export interface LoginFormProps {
    username: string;
    password: string;
}

export const LoginModal: FC<LoginModalProps> = ({open, onClose}: LoginModalProps): ReactElement => {
    const classes = useStylesSignIn();
    const dispatch = useDispatch();
    const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => { });
    const loadingStatus = useSelector(selectUserStatus);

    const { control, handleSubmit, errors } = useForm<LoginFormProps>({
        resolver: yupResolver(LoginFormSchema)
    });

    const onSubmit = async (data: LoginFormProps) => {
        dispatch(fetchSignIn(data));
    };

    React.useEffect(() => {
        if (loadingStatus === LoadingStatus.SUCCESS) {
            openNotificationRef.current('Авторизация успешна!', 'success');
            onClose();
        } else if (loadingStatus === LoadingStatus.ERROR) {
            openNotificationRef.current('Неверный логин или пароль', 'error');
        }
    }, [loadingStatus]);


    return (
        <Notification>
            {
                callback => {
                    openNotificationRef.current = callback;
                    return (
                        <ModalWindow
                            visible={open}
                            onClose={onClose}
                            classes={classes}
                            title="Войти в аккаунт"
                        >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                                    <FormGroup aria-label="position" row>
                                        <Controller
                                            as={TextField}
                                            control={control}
                                            name="username"
                                            className={classes.loginPartField}
                                            id="username"
                                            label="Имя пользователя"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="filled"
                                            type="username"
                                            defaultValue=""
                                            helperText={errors.username?.message}
                                            error={!!errors.username}
                                            fullWidth
                                            autoFocus
                                        />
                                        <Controller
                                            as={TextField}
                                            control={control}
                                            name="password"
                                            className={classes.loginPartField}
                                            id="password"
                                            label="Пароль"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="filled"
                                            type="password"
                                            defaultValue=""
                                            helperText={errors.password?.message}
                                            error={!!errors.password}
                                            fullWidth
                                        />
                                        <Button
                                            disabled={loadingStatus === LoadingStatus.LOADING}
                                            type="submit" variant="contained" color="primary" fullWidth
                                        >
                                            Войти
                                        </Button>
                                    </FormGroup>
                                </FormControl>
                            </form>
                        </ModalWindow>
                    )}}
        </Notification>
    );
};
