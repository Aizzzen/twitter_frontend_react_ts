import React, {FC, ReactElement} from 'react';
import classNames from "classnames";
import {Avatar, Button, CircularProgress, IconButton, TextareaAutosize} from "@material-ui/core";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import {useStylesHomeStyle} from "../pages/Home";

interface AddTweetFormProps {
    classes: ReturnType<typeof useStylesHomeStyle>
}

export const AddTweetForm: FC<AddTweetFormProps> = ({classes}: AddTweetFormProps): ReactElement => {
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
                    <span>280</span>
                    <div className={classes.addFormCircleProgress}>
                        <CircularProgress
                            variant="static"
                            size={20}
                            thickness={5}
                            value={30}
                            // style={}
                        />
                        <CircularProgress
                            style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                            variant="static"
                            size={20}
                            thickness={5}
                            value={100}
                        />
                    </div>
                    <Button
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
