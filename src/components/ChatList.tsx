import React from 'react';
import Paper from "@material-ui/core/Paper";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import {formatDate} from "../utils/formatDate";
import Typography from "@material-ui/core/Typography";
import {useStylesHomeStyle} from "../pages/Home/theme";
import {useSelector} from "react-redux";
import {selectIsTweetsLoading, selectTweetsItems} from "../store/ducks/tweets/selectors";
import {selectChatsItems} from "../store/ducks/chats/selectors";

export const ChatList = () => {
    const classes = useStylesHomeStyle();
    const chatsItems = useSelector(selectChatsItems); // chats
    const chats = Object.entries(chatsItems)
    // console.log(Object.entries(chats))
    const isLoading = useSelector(selectIsTweetsLoading);

    return (
        <>
            {
                isLoading ? (
                    <div className={classes.tweetsCentred}>
                        {/*<CircularProgress />*/}
                    </div>
                ) : (
                    chats.map((chat: any) => (
                        // <TweetItem key={tweet.id} {...tweet} photos={tweet.photos} likes={tweet.likes} comments={tweet.comments} classes={classes} />
                        <a
                            key={chat[0]}
                            // onClick={handleClickTweet}
                            className={classes.tweetWrapper} href={``}>
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
                                                    <b>{chat[1].fullname ? chat[1].fullname : 'fullname'}</b>&nbsp;
                                                    <span className={classes.tweetUserName}>
                                                        @{chat[1].username}
                                                    </span>&nbsp;
                                                    <span className={classes.tweetUserName}>·</span>&nbsp;
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
                        </a>
                    ))
                )
            }
        </>
    );
};
