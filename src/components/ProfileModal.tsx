import React, {FC, useEffect} from 'react';
import {useStylesSignIn} from "../pages/SignIn";
import {useDispatch, useSelector} from "react-redux";
import {selectUserData, selectUserStatus} from "../store/ducks/user/selectors";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {fetchUpdateProfile, fetchUserData} from "../store/ducks/user/actionCreators";
import {LoadingStatus} from "../store/types";
import {ModalWindow} from "./ModalWindow";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as yup from "yup";


interface ProfileModal {
    visibleModal: boolean
    setVisibleModal: any;
}

export interface ProfileFormProps {
    fullname: string;
    location: string;
    about: string;
    website: string;
}

const ProfileFormSchema = yup.object().shape({
    fullname: yup.string().min(6, 'Минимальная длина 6 символов'),
    location: yup.string(),
    about: yup.string(),
    website: yup.string()
})

export const ProfileModal: FC<ProfileModal> = ({visibleModal, setVisibleModal}: ProfileModal) => {
    const classes = useStylesSignIn();
    const dispatch = useDispatch();
    // const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => { });
    // const loadingStatus = useSelector(selectUserStatus);
    const userData = useSelector(selectUserData)?.profile

    const { control, handleSubmit, errors } = useForm<ProfileFormProps>({
        resolver: yupResolver(ProfileFormSchema)
    });

    const onSubmit = async (data: ProfileFormProps) => {
        dispatch(fetchUpdateProfile(data));
        alert('Данные были обновлены')
        dispatch(fetchUserData())
    };

    // useEffect(() => {

        // if (loadingStatus === LoadingStatus.SUCCESS) {
        //     openNotificationRef.current('Регистрация прошла успешно!', 'success');
        //     onClose();
        // } else if (loadingStatus === LoadingStatus.ERROR) {
        //     openNotificationRef.current('Ошибка при регистрации', 'error');
        // }
    // }, [loadingStatus]);

    const handleCloseModal = (): void => setVisibleModal(false);

    return (
        <ModalWindow
            visible={visibleModal}
            onClose={handleCloseModal}
            classes={classes}
            title="Редактировать профиль"
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
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
                            defaultValue={userData?.fullname}
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
                            defaultValue={userData?.location}
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
                            defaultValue={userData?.about}
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
                            defaultValue={userData?.website}
                            helperText={errors.website?.message}
                            error={!!errors.website}
                            fullWidth
                        />
                        <Button
                            // disabled={loadingStatus === LoadingStatus.LOADING}
                            type="submit" variant="contained" color="primary" fullWidth
                        >
                            Готово
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </ModalWindow>
    );
};
