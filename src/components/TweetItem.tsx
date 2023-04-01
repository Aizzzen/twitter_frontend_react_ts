import React, {FC, ReactElement} from 'react';
import classNames from "classnames";

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import CommentIcon from "@material-ui/icons/ChatBubbleOutline";
import RepostIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {useStylesHomeStyle} from "../pages/Home/theme";
import {useNavigate} from "react-router-dom";
import {formatDate} from "../utils/formatDate";

interface TweetProps {
    id: string;
    text: string;
    classes: ReturnType<typeof useStylesHomeStyle>;
    created_at: string;
    user: {
        fullname: string;
        username: string;
        avatar_url: string;
    }
}

export const TweetItem: FC<TweetProps> = ({id, text, user, classes, created_at}: TweetProps): ReactElement => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault();
        navigate(`/home/tweet/${id}`);
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


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
                            <Typography className={classes.tweetHeader}>
                                <div>
                                    {/*<b>{user.fullname}</b>&nbsp;*/}
                                    <b>fullname</b>&nbsp;
                                    <span className={classes.tweetUserName}>
                                {/*@{user.username}*/}
                                        username
                                </span>&nbsp;
                                    <span className={classes.tweetUserName}>·</span>&nbsp;
                                    <span className={classes.tweetUserName}>{formatDate(new Date(created_at))}</span>&nbsp;
                                </div>
                                <div>
                                    <IconButton
                                        aria-label="more"
                                        aria-controls="long-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            Редактировать
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            Удалить типотвит
                                        </MenuItem>
                                    </Menu>
                                </div>
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
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </a>
    );
};
