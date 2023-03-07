import React from 'react';
import {
    Container,
    createStyles,
    Grid,
    InputBase,
    makeStyles,
    Paper,
    Typography,
    withStyles
} from "@material-ui/core";
import { grey } from '@material-ui/core/colors';
import {Tweet} from "../components/Tweet";
import {Navbar} from "../components/Navbar";

export const useStylesHomeStyle = makeStyles((theme) => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        margin: '10px 0'
    },
    logoIcon: {
        fontSize: 36
    },
    navbarList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 230,
    },
    navbarListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                }
            }
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 50,
            marginBottom: 15,
            transition: 'background-color .1s ease-in-out',
        }
    },
    navbarListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15
    },
    navbarListItemIcon: {
        fontSize: 32,
        marginLeft: -5,
    },
    navbarTweetButton: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(2),
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: 0,
        borderBottom: 0,
    },
    tweetsHeader: {
        borderRadius: 0,
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        }
    },
    tweet: {
        cursor: 'pointer',
        padding: 15,
        paddingLeft: 20,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        }
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -13,
        justifyContent: 'space-between',
        width: 450,
    },
    tweetUserName: {
        color: grey[500]
    },
}))

const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            height: 45,
            padding: 0
        }
    })
)(InputBase)

export const Home = () => {
    const classes = useStylesHomeStyle();

    return (
        <Container className={classes.wrapper} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item xs={3}><Navbar classes={classes}/></Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} style={{ height: '100%' }} variant='outlined'>
                        <Paper className={classes.tweetsHeader} variant='outlined'>
                            <Typography variant='h6'>Главная</Typography>
                        </Paper>
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
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField
                        placeholder='Поиск по Твиттеру'
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Container>
    );
};
