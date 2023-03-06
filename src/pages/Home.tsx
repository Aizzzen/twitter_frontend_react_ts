import React from 'react';
import {
    Avatar,
    Container,
    createStyles,
    Grid,
    IconButton,
    InputBase,
    makeStyles,
    Paper,
    Typography,
    withStyles
} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import { grey } from '@material-ui/core/colors';
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';

const useStylesHomeStyle = makeStyles(() => ({
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
    },
    navbarListItem: {
        display: 'flex',
        alignItems: 'center',
    },
    navbarListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15
    },
    navbarListItemIcon: {
        fontSize: 28
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
    tweetsUserName: {
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
                <Grid item xs={3}>
                    <ul className={classes.navbarList}>
                        <li className={classes.navbarListItem}>
                            <IconButton className={classes.logo} aria-label='' color='primary'>
                                <TwitterIcon className={classes.logoIcon}/>
                            </IconButton>
                        </li>
                        <li className={classes.navbarListItem}>
                            <IconButton aria-label=''>
                                <SearchIcon className={classes.navbarListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.navbarListItemLabel} variant='h6'>Поиск</Typography>
                        </li>
                        <li className={classes.navbarListItem}>
                            <IconButton aria-label=''>
                                <NotificationIcon className={classes.navbarListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.navbarListItemLabel} variant='h6'>Уведомления</Typography>
                        </li>
                        <li className={classes.navbarListItem}>
                            <IconButton aria-label=''>
                                <MessageIcon className={classes.navbarListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.navbarListItemLabel} variant='h6'>Сообщения</Typography>
                        </li>
                        <li className={classes.navbarListItem}>
                            <IconButton aria-label=''>
                                <BookmarkIcon className={classes.navbarListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.navbarListItemLabel} variant='h6'>Закладки</Typography>
                        </li>
                        <li className={classes.navbarListItem}>
                            <IconButton aria-label=''>
                                <ListIcon className={classes.navbarListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.navbarListItemLabel} variant='h6'>Список</Typography>
                        </li>
                        <li className={classes.navbarListItem}>
                            <IconButton aria-label=''>
                                <UserIcon className={classes.navbarListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.navbarListItemLabel} variant='h6'>Профиль</Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} style={{ height: '100%' }} variant='outlined'>
                        <Paper className={classes.tweetsHeader} variant='outlined'>
                            <Typography variant='h6'>Главная</Typography>
                        </Paper>
                        <Paper className={classes.tweetsHeader} variant='outlined'>
                            <Grid container spacing={3}>
                                <Grid item xs={1}>
                                    <Avatar
                                        alt='User Avatar'
                                        src='https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                                    />
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography>
                                        <b>gadamurrr</b> <span className={classes.tweetsUserName}>@gadamurrr</span>
                                    </Typography>
                                    <Typography variant='body1' gutterBottom>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, culpa cumque dolores ea exercitationem facere id iusto molestiae molestias mollitia nemo perferendis possimus reiciendis repellat ullam voluptate! Nostrum, voluptatibus.
                                    </Typography>

                                    <div>
                                        <IconButton>
                                            <CommentIcon style={{fontSize: 16}} />
                                        </IconButton>
                                        <span>1</span>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
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
