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

import { TweetItem } from './TweetItem';

import classNames from "classnames";
import {MediaList} from "./MediaList";

export const FullTweet: FC = (): ReactElement | null => {
    const classes = useStylesHomeStyle();
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetData);
    const isLoading = useSelector(selectIsTweetLoading);
    const params: { id?: string } = useParams();
    const id = params.id;

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
                            {/*<b>{tweetData.fullname ? tweetData.fullname : 'fullname'}</b>&nbsp;*/}
                            <Link to={`user/${tweetData.username}`}><b>{tweetData.fullname ? tweetData.fullname : 'fullname'}</b>&nbsp;</Link>
                            <div>
                                <span className={classes.tweetUserName}>
                                    @{tweetData.username}
                                </span>&nbsp;
                            </div>
                        </Typography>
                    </div>
                    <Typography className={classes.fullTweetText} gutterBottom>
                        {tweetData.text}
                        <div className='tweet-media'>
                            {tweetData.photos && <MediaList media={tweetData.photos} classes={classes}/>}
                        </div>
                    </Typography>
                    <Typography>
                        <span className={classes.tweetUserName}>{format(new Date(tweetData.created_at), 'H:mm', { locale: ru })} · </span>
                        <span className={classes.tweetUserName}>{format(new Date(tweetData.created_at), 'dd.MM.yyyy г.', { locale: ru })}</span>
                    </Typography>
                    <div className={classNames(classes.tweetFooter, classes.fullTweetFooter)}>
                        <IconButton>
                            <CommentIcon style={{ fontSize: 25 }} />
                        </IconButton>
                        <IconButton>
                            <RepostIcon style={{ fontSize: 25 }} />
                        </IconButton>
                        <IconButton>
                            <LikeIcon style={{ fontSize: 25 }} />
                        </IconButton>
                        <IconButton>
                            <ShareIcon style={{ fontSize: 25 }} />
                        </IconButton>
                    </div>
                </Paper>
                <Divider />
                <TweetItem
                    id="101"
                    text="Any more to move? You might need to adjust your stretching routines!"
                    created_at={new Date().toString()}
                    username='ArleneAndrews_1'
                    classes={classes}
                />
                <TweetItem
                    id="102"
                    text="Any more to move? You might need to adjust your stretching routines!"
                    created_at={new Date().toString()}
                    username='ArleneAndrews_1'
                    classes={classes}
                />
                <TweetItem
                    id="103"
                    text="Any more to move? You might need to adjust your stretching routines!"
                    created_at={new Date().toString()}
                    username='ArleneAndrews_1'
                    classes={classes}
                />
            </>
        );

    }

    return null;
};
