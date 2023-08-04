import React, {FC} from 'react';
import {useStylesSignIn} from "../pages/SignIn";
import {useDispatch, useSelector} from "react-redux";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {ModalWindow} from "./ModalWindow";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import {selectUserData} from "../store/ducks/user/selectors";
import {fetchChats, fetchCreateChat} from "../store/ducks/chats/actionCreators";


interface ChatCreateModalProps {
    visibleModal: boolean
    setVisibleModal: any;
}

export interface ChatCreateModalFormProps {
    username: string;
}

const ChatCreateModalFormSchema = yup.object().shape({
    username: yup.string()
})

export const ChatCreateModal: FC<ChatCreateModalProps> = ({visibleModal, setVisibleModal}: ChatCreateModalProps) => {
    const classes = useStylesSignIn();
    const dispatch = useDispatch();
    const userData = useSelector(selectUserData)

    const { control, handleSubmit, errors } = useForm<ChatCreateModalFormProps>({
        resolver: yupResolver(ChatCreateModalFormSchema)
    });

    const onSubmit = async (data: ChatCreateModalFormProps) => {
        let payload = {
            user1: userData?.username,
            user2: data.username
        }
        dispatch(fetchCreateChat(payload));
        alert('Данные были обновлены')
        dispatch(fetchChats())
    };

    const handleCloseModal = (): void => setVisibleModal(false);

    return (
        <ModalWindow
            visible={visibleModal}
            onClose={handleCloseModal}
            classes={classes}
            title="Начать чат с @..."
        >
            <div style={{width: 400}}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                        <FormGroup aria-label="position" row>
                            <Controller
                                as={TextField}
                                control={control}
                                name="username"
                                className={classes.registerField}
                                id="text"
                                label="Введите имя пользователя без @"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                                type="text"
                                defaultValue=""
                                helperText={errors.username?.message}
                                error={!!errors.username}
                                fullWidth
                                autoFocus
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
            </div>
        </ModalWindow>
    );
};
