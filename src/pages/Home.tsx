import React from 'react';
import {Container, Grid, IconButton, makeStyles, Paper, Typography} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import CreateIcon from '@material-ui/icons/Create';

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
    }
}))

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
                    <Paper>xs</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>xs</Paper>
                </Grid>
            </Grid>
        </Container>
    );
};
