import React, {FC, ReactElement} from 'react';
import classNames from "classnames";

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import CommentIcon from "@material-ui/icons/ChatBubbleOutline";
import RepostIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";

import {useStylesHomeStyle} from "../pages/Home/theme";
import {Link} from "react-router-dom";

interface TweetProps {
    _id: string;
    text: string;
    classes: ReturnType<typeof useStylesHomeStyle>;
    user: {
        fullName: string;
        userName: string;
        avatarUrl: string;
    }
}

export const TweetItem: FC<TweetProps> = ({_id, text, user, classes}: TweetProps): ReactElement => {
    return (
        <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
            <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant='outlined'>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Avatar
                            alt={`Аватарка пользователя ${user.fullName}`}
                            src={user.avatarUrl}
                            className={classes.tweetAvatar}
                        />
                    </Grid>
                    <Grid item xs={11}>
                        <Typography>
                            <b>{user.fullName}</b>&nbsp;
                            <span className={classes.tweetUserName}>@{user.userName}</span>&nbsp;
                            <span className={classes.tweetUserName}>·</span>&nbsp;
                            <span className={classes.tweetUserName}>1 чс</span>&nbsp;
                        </Typography>
                        <Typography variant='body1' gutterBottom>
                            {text}
                        </Typography>
                        <div className={classes.tweetFooter}>
                            <div>
                                <IconButton>
                                    <CommentIcon style={{fontSize: 20}} />
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton>
                                    <RepostIcon style={{fontSize: 20}} />
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton>
                                    <LikeIcon style={{fontSize: 20}} />
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton>
                                    <ShareIcon style={{fontSize: 20}} />
                                </IconButton>
                                <span>1</span>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Link>
    );
};
