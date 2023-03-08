import React, {FC, ReactElement} from 'react';
import {
    Avatar, Button,
    Container, Divider,
    Grid, InputAdornment, List, ListItem, ListItemAvatar, ListItemText,
    Paper,
    Typography,
} from "@material-ui/core";
import {Tweet} from "../../components/Tweet";
import {Navbar} from "../../components/Navbar";
import {AddTweetForm} from "../../components/AddTweetForm";
import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import {useStylesHomeStyle} from "./theme";
import {SearchTextField} from "../../components/SearchTextField";


export const Index: FC = (): ReactElement => {
    const classes = useStylesHomeStyle();

    return (
        <Container className={classes.wrapper} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item sm={1} md={3}><Navbar classes={classes}/></Grid>
                <Grid item sm={8} md={6}>
                    <Paper className={classes.tweetsWrapper} variant='outlined'>
                        <Paper className={classes.tweetsHeader} variant='outlined'>
                            <Typography variant='h6'>Главная</Typography>
                        </Paper>
                        <Paper>
                            <div className={classes.addForm}>
                                <AddTweetForm classes={classes} />
                            </div>
                            <div className={classes.addFormBottomLine} />
                        </Paper>

                        {/*{isLoading ? (*/}
                        {/*    <div className={classes.tweetsCentred}>*/}
                        {/*        <CircularProgress />*/}
                        {/*    </div>*/}
                        {/*) : (*/}
                        {/*    tweets.map((tweet) => (*/}
                        {/*        <Tweet key={tweet._id} text={tweet.text} user={tweet.user} classes={classes} />*/}
                        {/*    ))*/}
                        {/*)}*/}


                        {/**/}
                        {[
                            ...new Array(20).fill(
                                <Tweet
                                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut, est fuga iste maxime quibusdam quisquam sed veniam? Accusantium debitis doloremque earum eveniet id laboriosam nemo nulla numquam ullam voluptas?'
                                    classes={classes}
                                    user={{
                                        fullName: 'gadamurrr',
                                        userName: 'gadamurrr',
                                        avatarUrl: 'https://occ-0-990-420.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYxJFBDckfZw1YUEIPwyuIg43Kw_HUBLvnCcgdOlvvf5Nc90SF3HSAi5L8uLyBqjziKBY-kGD2wu2JAqVsdHVR0frb6qG26I_U5v.jpg?r=77f',
                                    }}
                                />
                            )
                        ]}
                        {/**/}

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
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                <b>Актуальные темы</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="Санкт-Петербург"
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                Твитов: 3 331
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component="li" />
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="#коронавирус"
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                Твитов: 163 122
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component="li" />
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="Беларусь"
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                Твитов: 13 554
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component="li" />
                            </List>
                        </Paper>
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
