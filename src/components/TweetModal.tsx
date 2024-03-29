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
import {fetchTweetData, fetchUpdateTweet, setTweetData} from "../store/ducks/tweet/actionCreators";
import {selectTweetData} from "../store/ducks/tweet/selectors";
import {selectTweetsItems} from "../store/ducks/tweets/selectors";
import {fetchTweets} from "../store/ducks/tweets/actionCreators";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";


interface TweetModalProps {
    id: string;
    visibleModal: boolean
    setVisibleModal: any;
    tweetData?: any;
}

export interface TweetModalFormProps {
    text: string;
}

const TweetModalFormSchema = yup.object().shape({
    text: yup.string()
})

export const TweetModal: FC<TweetModalProps> = ({id, visibleModal, setVisibleModal}: TweetModalProps) => {
    const classes = useStylesSignIn();
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetData);

    const { control, handleSubmit, errors } = useForm<TweetModalFormProps>({
        resolver: yupResolver(TweetModalFormSchema)
    });

    const onSubmit = async (data: TweetModalFormProps) => {
        dispatch(fetchUpdateTweet({id, data}));
        alert('Данные были обновлены')
        dispatch(fetchTweets())
    };

    const handleCloseModal = (): void => setVisibleModal(false);

    return (
        <ModalWindow
            visible={visibleModal}
            onClose={handleCloseModal}
            classes={classes}
            title="Редактировать типоТвит"
        >
            <div style={{width: 550}}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                        <FormGroup aria-label="position" row>
                            <Controller
                                as={TextField}
                                control={control}
                                name="text"
                                className={classes.registerField}
                                id="text"
                                label="Текст типоТвита"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                                type="text"
                                // defaultValue=""
                                defaultValue={tweetData?.text}
                                helperText={errors.text?.message}
                                error={!!errors.text}
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
