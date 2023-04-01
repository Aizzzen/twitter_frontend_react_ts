import React, {FC, ReactElement, useEffect} from 'react';

import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import {TweetItem} from "../../components/TweetItem";
import {AddTweetForm} from "../../components/AddTweetForm";
import {useStylesHomeStyle} from "./theme";

import {useDispatch, useSelector} from "react-redux";
import {fetchTweets} from "../../store/ducks/tweets/actionCreators";
import {selectIsTweetsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors";
import {fetchTags} from "../../store/ducks/tags/actionCreators";
import {Route, Routes} from "react-router-dom";
import {GoBackButton} from "../../components/GoBackButton";
import {FullTweet} from "../../components/FullTweet";


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
        // <Container className={classes.wrapper} maxWidth='lg'>
        //     <Grid container spacing={3}>
        //         <Grid item sm={1} md={3}><Navbar classes={classes}/></Grid>
        //         <Grid item sm={8} md={6}>
                    <Paper className={classes.tweetsWrapper} variant='outlined'>
                        <Paper className={classes.tweetsHeader} variant='outlined'>
                            <Routes>
                                <Route path='/search/*' element={<GoBackButton />} />
                                <Route path='/tweet/*' element={<GoBackButton />} />
                            </Routes>

                            {['/', '/search'].map(path => {
                            // {['home', 'home/search'].map(path => {
                                return (
                                    <Routes>
                                        <Route path={path} element={
                                            <Typography variant='h6'>типоТвиты</Typography>
                                        }/>
                                    </Routes>
                                )
                            })}
                            <Routes>
                                <Route path='/tweet/:id' element={
                                // <Route path='home/tweet/:id' element={
                                    <Typography variant='h6'>типоТвитнуть</Typography>
                                } />
                            </Routes>
                        </Paper>

                        {['/', '/search'].map(path => {
                        // {['home', 'home/search'].map(path => {
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
                            <Route path='/' element={
                            // <Route path='home' element={
                                isLoading ? (
                                    <div className={classes.tweetsCentred}>
                                        <CircularProgress />
                                    </div>
                                ) : (
                                    tweets.map((tweet) => (
                                        <TweetItem key={tweet.id} {...tweet} classes={classes} />
                                    ))
                                )
                            }/>
                            <Route path='/tweet/:id' element={<FullTweet />} />
                            {/*<Route path='home/tweet/:id' element={<FullTweet />} />*/}
                        </Routes>

                    </Paper>
                // </Grid>
                // <Grid item sm={3} md={3}>
                //     <div className={classes.rightSide}>
                //         <SearchTextField
                //             variant="outlined"
                //             placeholder="Поиск по Твиттеру"
                //             InputProps={{
                //                 startAdornment: (
                //                     <InputAdornment position="start">
                //                         <SearchIcon />
                //                     </InputAdornment>
                //                 ),
                //             }}
                //             fullWidth
                //         />
                //         <Tags classes={classes} />
                //         <Paper className={classes.rightSideBlock}>
                //             <Paper className={classes.rightSideBlockHeader} variant="outlined">
                //                 <b>Кого читать</b>
                //             </Paper>
                //             <List>
                //                 <ListItem className={classes.rightSideBlockItem}>
                //                     <ListItemAvatar>
                //                         <Avatar
                //                             alt="Remy Sharp"
                //                             src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                //                         />
                //                     </ListItemAvatar>
                //                     <ListItemText
                //                         primary="Dock Of Shame"
                //                         secondary={
                //                             <Typography component="span" variant="body2" color="textSecondary">
                //                                 @FavDockOfShame
                //                             </Typography>
                //                         }
                //                     />
                //                     <Button color="primary">
                //                         <PersonAddIcon />
                //                     </Button>
                //                 </ListItem>
                //                 <Divider component="li" />
                //             </List>
                //         </Paper>
                //     </div>
                // </Grid>
            // </Grid>
        // </Container>
    );
};
