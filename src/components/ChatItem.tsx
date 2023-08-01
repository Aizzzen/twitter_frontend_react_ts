import React, {FC} from 'react';
import Paper from "@material-ui/core/Paper";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {useStylesHomeStyle} from "../pages/Home/theme";
import {Link} from "react-router-dom";

interface ChatItemProps {
    chat_id: string;
    fullname: string;
    username: string;
    classes: ReturnType<typeof useStylesHomeStyle>
}

export const ChatItem: FC<ChatItemProps> = ({chat_id, fullname, username, classes}: ChatItemProps) => {

    const handleClickChat = () => {

    }

    return (
        <Link
            to={`/chats/${chat_id}/`}
            key={chat_id}
            // onClick={handleClickChat}
            className={classes.tweetWrapper}
        >
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
                                    {/*<span className={classes.tweetUserName}>·</span>&nbsp;*/}
                                    {/*<span className={classes.tweetUserName}>{formatDate(new Date(tweet.created_at))}</span>&nbsp;*/}
                                </div>
                            </div>
                            <Typography style={{"whiteSpace": "pre-line", marginRight: 10}} variant='body1' gutterBottom>
                                {/*<span dangerouslySetInnerHTML={{__html: tweet.text}}/>*/}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Link>
    );
};
