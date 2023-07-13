import React, {FC, FormEvent, ReactElement, useState} from 'react';
import classNames from "classnames";

import Alert from "@material-ui/lab/Alert";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import {useStylesHomeStyle} from "../pages/Home/theme";
import {useDispatch, useSelector} from "react-redux";
import {AddFormState} from "../store/ducks/tweets/contracts/state";
import {fetchAddComment, setAddFormState} from "../store/ducks/tweets/actionCreators";
import {selectAddFormState} from "../store/ducks/tweets/selectors";
import { useParams } from 'react-router-dom';
import {selectUserData} from "../store/ducks/user/selectors";

interface AddCommentFormProps {
    classes: ReturnType<typeof useStylesHomeStyle>;
    maxRows?: number;
}

type Comment = {
    text: string;
    user: number;
    tweet: number;
}

export const AddCommentForm: FC<AddCommentFormProps> = ({classes, maxRows}: AddCommentFormProps): ReactElement => {
    const dispatch = useDispatch()
    const userData = useSelector(selectUserData)
    const addFormState = useSelector(selectAddFormState)
    const MAX_LENGTH = 280
    const [text, setText] = useState<string>('');
    const textLimitPercent = Math.round((text.length / 280) * 100);
    const textCount = MAX_LENGTH - text.length;
    const {id} = useParams()

    const handleChangeTextArea = (e: FormEvent<HTMLTextAreaElement>): void => {
        if(e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }

    const handleClickAddComment = (): void => {
        dispatch(setAddFormState(AddFormState.LOADING))        
        dispatch(fetchAddComment({
            text: text,
            user: Number(userData?.id),
            tweet: Number(id)
        }))
        setText('');
        dispatch(setAddFormState(AddFormState.NEVER))        
    }

    return (
        <div>
            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt={`Аватарка пользователя UserAvatar`}
                    // src={avatar_url}
                />
                <TextareaAutosize
                    className={classes.addFormTextarea}
                    placeholder="Добавить комментарий"
                    value={text}
                    onChange={handleChangeTextArea}
                    rowsMax={maxRows}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}/>
                <div className={classes.addFormBottomRight}>
                    {text && (
                        <>
                            <span>{textCount}</span>
                            <div className={classes.addFormCircleProgress}>
                                <CircularProgress
                                    style={text.length > MAX_LENGTH ? {color: 'red'} : undefined}
                                    variant="static"
                                    size={20}
                                    thickness={5}
                                    value={text.length > MAX_LENGTH ? 100 : textLimitPercent}
                                />
                                <CircularProgress
                                    style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                                    variant="static"
                                    size={20}
                                    thickness={5}
                                    value={100}
                                />
                            </div>
                        </>
                    )}
                    <Button
                        onClick={handleClickAddComment}
                        disabled={addFormState === AddFormState.LOADING || !text || text.length >= MAX_LENGTH}
                        color="primary"
                        variant="contained"
                    >
                        {addFormState === AddFormState.LOADING ? (
                            <CircularProgress/>
                        ) : (
                            'добавить'
                        )}
                    </Button>
                </div>
            </div>
            {addFormState === AddFormState.ERROR && (
                <Alert severity="error">
                    Ошибка при добавлении комментария{' '}
                    <span aria-label="emoji-plak" role="img">😞</span>
                </Alert>
            )}
        </div>
    );
};
