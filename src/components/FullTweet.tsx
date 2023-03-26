import React, {FC, ReactElement, useEffect} from 'react';
import {selectIsTweetLoading, selectTweetData} from "../store/ducks/tweet/selectors";
import {useDispatch, useSelector} from "react-redux";
import {fetchTweetData, setTweetData} from "../store/ducks/tweet/actionCreators";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useStylesHomeStyle} from "../pages/Home/theme";
import {useParams} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";

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

    if (isLoading) {
        return (
            <div className={classes.tweetsCentred}>
                <CircularProgress />
            </div>
        );
    }

    if (tweetData) {
        return (
            <Paper className={classes.fullTweet}>
                <div className={classNames(classes.tweetsHeaderUser)}>
                    <Avatar
                        className={classes.tweetAvatar}
                        alt={`Аватарка пользователя`}
                        // alt={`Аватарка пользователя ${tweetData.user.fullname}`}
                        // src={tweetData.user.avatar_url}
                    />
                    <Typography>
                        {/*<b>{tweetData.user.fullname}</b>&nbsp;*/}
                        <b>fullname</b>&nbsp;
                        <div>
                            <span className={classes.tweetUserName}>
                                {/*@{tweetData.user.username}*/}
                                username
                            </span>&nbsp;
                            <span className={classes.tweetUserName}>·</span>&nbsp;
                            <span className={classes.tweetUserName}>1 ч</span>
                        </div>
                    </Typography>
                </div>
                <Typography className={classes.fullTweetText} gutterBottom>
                    {tweetData.text}
                </Typography>
            </Paper>
        );

    }

    return null;
};
