import React, {FC, ReactElement, useEffect} from 'react';
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
import {fetchSignUp} from "../../../store/ducks/user/actionCreators";
import {selectUserStatus} from "../../../store/ducks/user/selectors";

interface FullRegisterModalProps {
    open: boolean;
    onClose: () => void;
}

const FullRegisterFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Введите почту'),
    username: yup.string().required('Введите имя пользователя'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required(),
    re_password: yup.string().oneOf([yup.ref('password'), undefined], 'Пароли не совпадают'),
    fullname: yup.string().min(2, 'Минимальная длина 2 символов'),
    location: yup.string(),
    about: yup.string(),
    website: yup.string()
})

export interface FullRegisterFormProps {
    email: string;
    username: string;
    password: string;
    re_password: string;
    fullname: string;
    location: string;
    about: string;
    website: string;
}

export const FullRegisterModal: FC<FullRegisterModalProps> = ({open, onClose}: FullRegisterModalProps): ReactElement => {
    const classes = useStylesSignIn();
    const dispatch = useDispatch();
    const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => { });
    const loadingStatus = useSelector(selectUserStatus);

    const { control, handleSubmit, errors } = useForm<FullRegisterFormProps>({
        resolver: yupResolver(FullRegisterFormSchema)
    });

    const onSubmit = async (data: FullRegisterFormProps) => {
        dispatch(fetchSignUp(data));
        alert('Проверьте введенную вами почту')
    };

    useEffect(() => {
        if (loadingStatus === LoadingStatus.SUCCESS) {
            openNotificationRef.current('Регистрация прошла успешно!', 'success');
            onClose();
        } else if (loadingStatus === LoadingStatus.ERROR) {
            openNotificationRef.current('Ошибка при регистрации', 'error');
        }
    }, [loadingStatus]);

    return (
        <ModalWindow
            visible={open}
            onClose={onClose}
            classes={classes}
            title="Зарегистрироваться"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
                        <Controller
                            as={TextField}
                            control={control}
                            name="email"
                            className={classes.registerField}
                            id="email"
                            label="E-mail"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="email"
                            defaultValue=""
                            helperText={errors.email?.message}
                            error={!!errors.email}
                            fullWidth
                            autoFocus
                        />
                        <Controller
                            as={TextField}
                            control={control}
                            name="username"
                            className={classes.registerField}
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
                        />
                        <Controller
                            as={TextField}
                            control={control}
                            name="password"
                            className={classes.registerField}
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
                        <Controller
                            as={TextField}
                            control={control}
                            name="re_password"
                            className={classes.registerField}
                            id="re_password"
                            label="Повторите пароль"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="password"
                            defaultValue=""
                            helperText={errors.re_password?.message}
                            error={!!errors.re_password}
                            fullWidth
                        />
                        <Controller
                            as={TextField}
                            control={control}
                            name="fullname"
                            className={classes.registerField}
                            id="fullname"
                            label="Полное имя"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="text"
                            defaultValue=""
                            helperText={errors.fullname?.message}
                            error={!!errors.fullname}
                            fullWidth
                            autoFocus
                        />
                        <Controller
                            as={TextField}
                            control={control}
                            name="location"
                            className={classes.registerField}
                            id="location"
                            label="Местоположение"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="text"
                            defaultValue=""
                            helperText={errors.location?.message}
                            error={!!errors.location}
                            fullWidth
                        />
                        <Controller
                            as={TextField}
                            control={control}
                            name="about"
                            className={classes.registerField}
                            id="about"
                            label="Обо мне"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="text"
                            defaultValue=""
                            helperText={errors.about?.message}
                            error={!!errors.about}
                            fullWidth
                        />
                        <Controller
                            as={TextField}
                            control={control}
                            name="website"
                            className={classes.registerField}
                            id="website"
                            label="Веб-сайт"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="text"
                            defaultValue=""
                            helperText={errors.website?.message}
                            error={!!errors.website}
                            fullWidth
                        />
                        <Button
                            disabled={loadingStatus === LoadingStatus.LOADING}
                            type="submit" variant="contained" color="primary" fullWidth
                        >
                            Зарегистрироваться
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </ModalWindow>
    );
};
