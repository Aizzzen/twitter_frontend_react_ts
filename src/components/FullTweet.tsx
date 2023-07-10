import React, {FC, ReactElement, useEffect} from 'react';
import mediumZoom from 'medium-zoom';
import {selectIsTweetLoading, selectTweetData} from "../store/ducks/tweet/selectors";
import {useDispatch, useSelector} from "react-redux";
import {fetchTweetData, setTweetData} from "../store/ducks/tweet/actionCreators";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useStylesHomeStyle} from "../pages/Home/theme";
import {Link, useParams} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import { Divider, IconButton } from '@material-ui/core';

import format from 'date-fns/format'
import ru from 'date-fns/locale/ru'
import { textWithLinks } from '../utils/textWithLinks';

import { TweetItem } from './TweetItem';

import classNames from "classnames";
import {MediaList} from "./MediaList";
import { AddTweetForm } from './AddTweetForm';
import { AddCommentForm } from './AddCommentForm';

export const FullTweet: FC = (): ReactElement | null => {
    const classes = useStylesHomeStyle();
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetData);
    const isLoading = useSelector(selectIsTweetLoading);
    const params: { id?: string } = useParams();
    const id = params.id;
    const newText = textWithLinks(tweetData ? tweetData.text : "")

    useEffect(() => {
        if (id) {
            dispatch(fetchTweetData(id));
        }
        return () => {
            dispatch(setTweetData(undefined));
        };
    }, [dispatch, id]);

    useEffect(() => {
        if(!isLoading) {
            mediumZoom('.tweet-media img')
        }
    }, [isLoading])

    if (isLoading) {
        return (
            <div className={classes.tweetsCentred}>
                <CircularProgress />
            </div>
        );
    }

    if (tweetData) {
        return (
            <>
                <Paper className={classes.fullTweet}>
                    <div className={classNames(classes.tweetsHeaderUser)}>
                        <Avatar
                            className={classes.tweetAvatar}
                            alt={`Аватарка пользователя`}
                            // alt={`Аватарка пользователя ${tweetData.user.fullname}`}
                            // src={tweetData.user.avatar_url}
                        />
                        <Typography>
                            <b>{tweetData.fullname ? tweetData.fullname : 'fullname'}</b>&nbsp;
                            <div>
                                <span className={classes.tweetUserName}>
                                    @{tweetData.username}
                                </span>&nbsp;
                            </div>
                        </Typography>
                    </div>
                    <Typography className={classes.fullTweetText} gutterBottom>
                        <span style={{whiteSpace: "pre-line"}} dangerouslySetInnerHTML={{__html: newText}}/>
                        <div className='tweet-media'>
                            {tweetData.photos && <MediaList media={tweetData.photos} classes={classes}/>}
                        </div>
                    </Typography>
                    <Typography>
                        <span className={classes.tweetUserName}>{format(new Date(tweetData.created_at), 'H:mm', { locale: ru })} · </span>
                        <span className={classes.tweetUserName}>{format(new Date(tweetData.created_at), 'dd.MM.yyyy г.', { locale: ru })}</span>
                    </Typography>
                    <div className={classNames(classes.tweetFooter, classes.fullTweetFooter)}>
                        <div>
                            <IconButton>
                                <CommentIcon style={{ fontSize: 25 }} />
                            </IconButton>
                            <span>{tweetData.comments?.length}</span>
                        </div>
                        <div>
                            <IconButton>
                                <RepostIcon style={{ fontSize: 25 }} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <LikeIcon style={{ fontSize: 25 }} />
                            </IconButton>
                            <span>{tweetData.likes}</span>
                        </div>
                        <div>
                            <IconButton>
                                <ShareIcon style={{ fontSize: 25 }} />
                            </IconButton>
                        </div>
                    </div>
                </Paper>
                <Divider />
                <div style={{padding: 20}}>
                    <AddCommentForm classes={classes}/>
                </div>
                <Divider />
                {tweetData.comments?.map((el: any) => (
                    <TweetItem
                        id={el.id}
                        username={el.user}
                        text={el.text}
                        created_at={el.created_at}
                        classes={classes}
                        isComment={true}
                    />
                ))}
            </>
        );

    }

    return null;
};
