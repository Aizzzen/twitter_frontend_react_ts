import React, {FC, FormEvent, ReactElement, useState} from 'react';
import classNames from "classnames";

import Alert from "@material-ui/lab/Alert";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedOutlined";

import {useStylesHomeStyle} from "../pages/Home/theme";
import {useDispatch, useSelector} from "react-redux";
import {AddFormState} from "../store/ducks/tweets/contracts/state";
import {fetchAddTweet} from "../store/ducks/tweets/actionCreators";
import {selectAddFormState} from "../store/ducks/tweets/selectors";

interface AddTweetFormProps {
    classes: ReturnType<typeof useStylesHomeStyle>;
    maxRows?: number;
}

export const AddTweetForm: FC<AddTweetFormProps> = ({classes, maxRows}: AddTweetFormProps): ReactElement => {
    const dispatch = useDispatch()
    const addFormState = useSelector(selectAddFormState)
    const MAX_LENGTH = 280
    const [text, setText] = useState<string>('');
    const textLimitPercent = Math.round((text.length / 280) * 100);
    const textCount = MAX_LENGTH - text.length;

    const handleChangeTextArea = (e: FormEvent<HTMLTextAreaElement>): void => {
        if(e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }

    const handleClickAddTweet = (): void => {
        dispatch(fetchAddTweet(text))
        setText('');
    }

    return (
        <div>
            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt={`Аватарка пользователя UserAvatar`}
                    src="https://pbs.twimg.com/profile_images/796061890451542016/J-O1AguD_bigger.jpg"
                />
                <TextareaAutosize
                    className={classes.addFormTextarea}
                    placeholder="Что происходит?"
                    value={text}
                    onChange={handleChangeTextArea}
                    rowsMax={maxRows}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                    <IconButton color="primary">
                        <ImageOutlinedIcon style={{ fontSize: 26 }} />
                    </IconButton>
                    <IconButton color="primary">
                        <EmojiIcon style={{ fontSize: 26 }} />
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>
                    {text && (
                        <>
                            <span>{textCount}</span>
                            {/*<span>{text.length} / 280</span>*/}
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
                        onClick={handleClickAddTweet}
                        disabled={addFormState === AddFormState.LOADING || !text || text.length >= MAX_LENGTH}
                        color="primary"
                        variant="contained"
                    >
                        {addFormState === AddFormState.LOADING ? (
                            <CircularProgress/>
                        ) : (
                            'типоТвитнуть'
                        )}
                    </Button>
                </div>
            </div>
            {addFormState === AddFormState.ERROR && (
                <Alert severity="error">
                    Ошибка при добавлении типотвита{' '}
                    <span aria-label="emoji-plak" role="img">😞</span>
                </Alert>

            )}
        </div>
    );
};
