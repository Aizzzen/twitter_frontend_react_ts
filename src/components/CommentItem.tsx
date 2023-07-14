import React, {FC, ReactElement, useState} from 'react';
import classNames from "classnames";

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import MoreVertIcon from '@material-ui/icons/MoreVert';

import {useStylesHomeStyle} from "../pages/Home/theme";
import {formatDate} from "../utils/formatDate";
import {removeTweet} from "../store/ducks/tweets/actionCreators";
import {useDispatch} from "react-redux";
import { textWithLinks } from '../utils/textWithLinks';

interface CommentProps {
    text: string;
    username?: string;
    fullname?: string;
    classes: ReturnType<typeof useStylesHomeStyle>;
    created_at: string;
    // avatar_url: string;
}

export const CommentItem: FC<CommentProps> = ({text, username, fullname, classes, created_at}: CommentProps): ReactElement => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const newText = textWithLinks(text)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event: React.MouseEvent<HTMLElement>): void => {
        event.stopPropagation();
        event.preventDefault();
        setAnchorEl(null);
    };

    const handleRemove = (event: React.MouseEvent<HTMLElement>): void => {
        handleClose(event)
        if(window.confirm('Вы действительно хотите удалить комментарий?')) {
            // dispatch(removeTweet(id))
            // dispatch(removeComment(id))
        }
    };

    return (
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
                                <b>{fullname ? fullname : 'fullname'}</b>&nbsp;
                                <span className={classes.tweetUserName}>
                                        @{username}
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
                                    <MenuItem onClick={handleRemove}>
                                        Удалить комментарий
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                        <Typography style={{whiteSpace: "pre-line", marginRight: 10}} variant='body1' gutterBottom>
                            <span dangerouslySetInnerHTML={{__html: newText}}/>
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
};
