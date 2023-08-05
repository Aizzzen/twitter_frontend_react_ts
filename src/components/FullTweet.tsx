import React, {FC, ReactElement, useEffect, useState} from 'react';
import mediumZoom from 'medium-zoom';
import {selectIsTweetLoading, selectTweetData} from "../store/ducks/tweet/selectors";
import {useDispatch, useSelector} from "react-redux";
import {fetchTweetData, setTweetData} from "../store/ducks/tweet/actionCreators";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useStylesHomeStyle} from "../pages/Home/theme";
import {Link, useNavigate, useParams} from "react-router-dom";
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

import classNames from "classnames";
import {MediaList} from "./MediaList";
import { AddCommentForm } from './AddCommentForm';
import {CommentItem} from "./CommentItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {fetchTweets, removeTweet} from "../store/ducks/tweets/actionCreators";
import {TweetModal} from "./TweetModal";

export const FullTweet: FC = (): ReactElement | null => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()
    const classes = useStylesHomeStyle();
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetData);
    const isLoading = useSelector(selectIsTweetLoading);
    const params = useParams();
    const id = params.id;
    const newText = textWithLinks(tweetData?.text ? tweetData?.text : "")

    useEffect(() => {
        if (id) {
            dispatch(fetchTweetData(id));
        }
        return () => {
            dispatch(setTweetData(undefined));
        };
    }, [dispatch, id, visibleModal]);

    useEffect(() => {
        if(!isLoading) {
            mediumZoom('.tweet-media img')
        }
    }, [isLoading])

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event: React.MouseEvent<HTMLElement>): void => {
        event.preventDefault();
        event.stopPropagation();
        setAnchorEl(null);
    };

    const handleUpdate = (event: React.MouseEvent<HTMLElement>): void => {
        event.preventDefault();
        event.stopPropagation();
        setVisibleModal(true)
        handleClose(event)
    };

    const handleRemove = (event: React.MouseEvent<HTMLElement>): void => {
        handleClose(event)
        if(id && window.confirm('Вы действительно хотите удалить твит?')) {
            dispatch(removeTweet(id))
            // navigate('/home', { replace: true })
            location.reload()
        }
    };

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
                        <div style={{position: 'relative', left: 300}}>
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
                                <MenuItem onClick={handleUpdate}>
                                    Редактировать
                                </MenuItem>
                                {/*<MenuItem onClick={handleClose}>*/}
                                <MenuItem onClick={handleRemove}>
                                    Удалить типотвит
                                </MenuItem>
                            </Menu>
                        </div>
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
                    <CommentItem
                        tweetId={tweetData.id}
                        key={el.id}
                        id={el.id}
                        text={el.text}
                        username={el.user}
                        fullname={el.fullname}
                        classes={classes}
                        created_at={el.created_at}
                    />
                ))}
                {visibleModal && id && <TweetModal id={id} visibleModal={visibleModal} setVisibleModal={setVisibleModal} />}
            </>
        );
    }
    return null;
};
