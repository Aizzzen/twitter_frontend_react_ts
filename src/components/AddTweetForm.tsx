import React, {FC, FormEvent, ReactElement, useState} from 'react';
import classNames from "classnames";
import {Avatar, Button, CircularProgress, IconButton, TextareaAutosize} from "@material-ui/core";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import {useStylesHomeStyle} from "../pages/Home/theme";

interface AddTweetFormProps {
    classes: ReturnType<typeof useStylesHomeStyle>
}

export const AddTweetForm: FC<AddTweetFormProps> = ({classes}: AddTweetFormProps): ReactElement => {
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
                        disabled={text.length > MAX_LENGTH}
                        color="primary"
                        variant="contained"
                    >
                        Твитнуть
                    </Button>
                </div>
            </div>
        </div>
    );
};
