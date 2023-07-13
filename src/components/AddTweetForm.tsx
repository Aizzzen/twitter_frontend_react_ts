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
import {fetchAddTweet, setAddFormState} from "../store/ducks/tweets/actionCreators";
import {selectAddFormState} from "../store/ducks/tweets/selectors";
import {UploadMedia} from "./UploadMedia";

interface AddTweetFormProps {
    classes: ReturnType<typeof useStylesHomeStyle>;
    maxRows?: number;
}

export interface ImageObj {
    blobUrl: string;
    file: File;
}

export const AddTweetForm: FC<AddTweetFormProps> = ({classes, maxRows}: AddTweetFormProps): ReactElement => {
    const dispatch = useDispatch()
    const addFormState = useSelector(selectAddFormState)
    const [media, setMedia] = useState<ImageObj[]>([])
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
        console.log(media)
        dispatch(setAddFormState(AddFormState.LOADING))

        let files: File[] = []
        media.map(obj => files.push(obj.file))
        const formData = new FormData();
        formData.append('text', text);
        for(let i = 0; i < files.length; i++) {
            formData.append('media', files[i]);
        }

        dispatch(fetchAddTweet({text, formData}))
        setText('');
        setMedia([]);
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
                    placeholder="Что происходит?"
                    value={text}
                    onChange={handleChangeTextArea}
                    rowsMax={maxRows}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                    <UploadMedia media={media} onChangeMedia={setMedia} />
                </div>
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
