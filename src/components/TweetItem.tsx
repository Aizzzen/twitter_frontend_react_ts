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
import {useNavigate} from "react-router-dom";
import {formatDate} from "../utils/formatDate";
import {MediaList} from "./MediaList";
import { textWithLinks } from '../utils/textWithLinks';

interface TweetProps {
    id: string;
    text: string;
    username?: string;
    fullname?: string;
    photos?: string[];
    classes: ReturnType<typeof useStylesHomeStyle>;
    likes?: number;
    comments?: any;
    created_at: string;
    // avatar_url: string;
}

export const TweetItem: FC<TweetProps> = ({id, text, username, fullname, photos, classes, likes, comments, created_at}: TweetProps): ReactElement => {
    const navigate = useNavigate();
    const newText = textWithLinks(text)

    const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault();
        navigate(`/home/tweet/${id}`);
    }

    return (
        <a onClick={handleClickTweet} className={classes.tweetWrapper} href={`/home/tweet/${id}`}>
            <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant='outlined'>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Avatar
                            alt={`Аватарка пользователя`}
                            // alt={`Аватарка пользователя ${user.fullname}`}
                            // src={user.avatar_url}
                            className={classes.tweetAvatar}
                        />
                    </Grid>
                    <Grid item xs={11}>
                        <div className={classes.tweetContent}>
                            <div className={classes.tweetHeader}>
                                <div style={{marginBottom: 8}}>
                                    <b>{fullname ? fullname : ''}</b>&nbsp;
                                    <span className={classes.tweetUserName}>
                                        @{username}
                                    </span>&nbsp;
                                    <span className={classes.tweetUserName}>·</span>&nbsp;
                                    <span className={classes.tweetUserName}>{formatDate(new Date(created_at))}</span>&nbsp;
                                </div>
                            {/*    */}
                            </div>
                            <Typography style={{"whiteSpace": "pre-line", marginRight: 10}} variant='body1' gutterBottom>
                                <span dangerouslySetInnerHTML={{__html: newText}}/>
                                {photos && <MediaList media={photos} classes={classes}/>}
                            </Typography>
                            <div className={classes.tweetFooter}>
                                <div>
                                    <IconButton>
                                        <CommentIcon style={{fontSize: 20}} />
                                    </IconButton>
                                    <span>{comments?.length}</span>
                                </div>
                                <div>
                                    <IconButton>
                                        <RepostIcon style={{fontSize: 20}} />
                                    </IconButton>
                                    <span></span>
                                </div>
                                <div>
                                    <IconButton>
                                        <LikeIcon style={{fontSize: 20}} />
                                    </IconButton>
                                    <span style={{position: 'relative', top: 1}}>{likes}</span>
                                </div>
                                <div>
                                    <IconButton>
                                        <ShareIcon style={{fontSize: 20}} />
                                    </IconButton>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </a>
    );
};
