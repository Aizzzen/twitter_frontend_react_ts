import React, {FC, ReactElement, useEffect, useState} from 'react';

import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import {TweetItem} from "../../components/TweetItem";
import {AddTweetForm} from "../../components/AddTweetForm";
import {useStylesHomeStyle} from "./theme";

import {useDispatch, useSelector} from "react-redux";
import {fetchMoreTweets, fetchTweets} from "../../store/ducks/tweets/actionCreators";
import {
    selectIsTweetsLoading,
    selectNextPage,
    selectTweetsItems
} from "../../store/ducks/tweets/selectors";
import {Route, Routes} from "react-router-dom";
import {GoBackButton} from "../../components/ui/GoBackButton";
import {FullTweet} from "../../components/FullTweet";
import Button from "@material-ui/core/Button";


export const Home: FC = (): ReactElement => {
    const classes = useStylesHomeStyle();
    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading);
    const nextPage = useSelector(selectNextPage)
    const [disabled, setDisabled] = useState<boolean>(false)

    const handleFetchMoreTweets = () => {
        if(nextPage) {
            dispatch(fetchMoreTweets({nextPage}))
        } else {
            setDisabled(true)
        }
    }

    useEffect(() => {
        dispatch(fetchTweets())
    }, [dispatch])

    return (
        <Paper data-testid='home-page-paper-container' className={classes.tweetsWrapper} variant='outlined'>
            <Paper className={classes.tweetsHeader} variant='outlined'>
                <Routes>
                    <Route path='/search/*' element={<GoBackButton />} />
                    <Route path='/tweet/*' element={<GoBackButton />} />
                </Routes>

                {['/', '/search'].map(path => {
                    return (
                        <Routes key={path}>
                            <Route path={path} element={
                                <Typography variant='h6'>типоТвиты</Typography>
                            }/>
                        </Routes>
                    )
                })}
                <Routes>
                    <Route path='/tweet/:id' element={
                        <Typography variant='h6'>типоТвитнуть</Typography>
                    } />
                </Routes>
            </Paper>

            {['/', '/search'].map(path => {
                return (
                    <Routes key={path}>
                        <Route path={path} element={
                            <Paper>
                                <div className={classes.addForm}>
                                    <AddTweetForm classes={classes} />
                                </div>
                                <div className={classes.addFormBottomLine} />
                            </Paper>
                        }/>
                    </Routes>
                )
            })}

            <Routes>
                <Route path='/' element={
                    isLoading ? (
                        <div className={classes.tweetsCentred}>
                            <CircularProgress />
                        </div>
                    ) : (
                        <>
                            {tweets.map((tweet) => (
                                <TweetItem key={tweet.id} {...tweet} photos={tweet.photos} likes={tweet.likes}
                                           comments={tweet.comments} classes={classes}/>
                            ))}
                            <Button
                                disabled={disabled}
                                variant='contained'
                                color='primary'
                                style={{display: 'flex', margin: '0 auto', marginTop: 10}}
                                onClick={handleFetchMoreTweets}
                            >
                                {disabled ? "Нечего загружать :)" : "Загрузить больше"}
                            </Button>
                        </>
                    )
                }/>
                <Route path='/tweet/:id' element={<FullTweet />} />
            </Routes>
        </Paper>
    );
};
