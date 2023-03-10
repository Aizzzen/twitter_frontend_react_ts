import React, {FC, ReactElement, useEffect} from 'react';

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import {Tweet} from "../../components/Tweet";
import {Navbar} from "../../components/Navbar";
import {AddTweetForm} from "../../components/AddTweetForm";
import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import {useStylesHomeStyle} from "./theme";
import {SearchTextField} from "../../components/SearchTextField";

import {useDispatch, useSelector} from "react-redux";
import {fetchTweets} from "../../store/ducks/tweets/actionCreators";
import {selectIsTweetsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors";
import {fetchTags} from "../../store/tags/actionCreators";
import {Tags} from "../../components/Tags";
import {Route, Routes} from "react-router-dom";


export const Home: FC = (): ReactElement => {
    const classes = useStylesHomeStyle();


    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading);

    useEffect(() => {
        dispatch(fetchTweets())
        dispatch(fetchTags())
    }, [dispatch])

    return (
        <Container className={classes.wrapper} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item sm={1} md={3}><Navbar classes={classes}/></Grid>
                <Grid item sm={8} md={6}>
                    <Paper className={classes.tweetsWrapper} variant='outlined'>
                        <Paper className={classes.tweetsHeader} variant='outlined'>
                            {['home', 'home/search'].map(path => {
                                return (
                                    <Routes>
                                        <Route path={path} element={
                                            <Typography variant='h6'>Твиты</Typography>
                                        }/>
                                    </Routes>
                                )
                            })}
                            <Routes>
                                <Route path='home/tweet/:id' element={
                                    <Typography variant='h6'>Твитнуть</Typography>
                                } />
                            </Routes>
                        </Paper>

                        {['home', 'home/search'].map(path => {
                            return (
                                <Routes>
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
                            <Route path='home' element={
                                isLoading ? (
                                    <div className={classes.tweetsCentred}>
                                        <CircularProgress />
                                    </div>
                                ) : (
                                    tweets.map((tweet) => (
                                        <Tweet key={tweet._id} {...tweet} classes={classes} />
                                    ))
                                )
                            }/>
                        </Routes>

                    </Paper>
                </Grid>
                <Grid item sm={3} md={3}>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant="outlined"
                            placeholder="Поиск по Твиттеру"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <Tags classes={classes} />
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                <b>Кого читать</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Dock Of Shame"
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                @FavDockOfShame
                                            </Typography>
                                        }
                                    />
                                    <Button color="primary">
                                        <PersonAddIcon />
                                    </Button>
                                </ListItem>
                                <Divider component="li" />
                            </List>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};
