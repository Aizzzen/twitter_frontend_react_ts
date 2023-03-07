import React, {FC, ReactElement} from 'react';
import {Button, IconButton, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MessageIcon from "@material-ui/icons/EmailOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListIcon from "@material-ui/icons/ListAltOutlined";
import UserIcon from "@material-ui/icons/PermIdentityOutlined";
import {useStylesHomeStyle} from "../pages/Home";

interface NavbarProps {
    classes: ReturnType<typeof useStylesHomeStyle>
}

export const Navbar: FC<NavbarProps> = ({classes}: NavbarProps): ReactElement => {
    return (
        <ul className={classes.navbarList}>
            <li className={classes.navbarListItem}>
                <IconButton className={classes.logo} aria-label='' color='primary'>
                    <TwitterIcon className={classes.logoIcon}/>
                </IconButton>
            </li>
            <li className={classes.navbarListItem}>
                <div>
                    <SearchIcon className={classes.navbarListItemIcon}/>
                    <Typography className={classes.navbarListItemLabel} variant='h6'>Поиск</Typography>
                </div>
            </li>
            <li className={classes.navbarListItem}>
                <div>
                    <NotificationIcon className={classes.navbarListItemIcon}/>
                    <Typography className={classes.navbarListItemLabel} variant='h6'>Уведомления</Typography>
                </div>
            </li>
            <li className={classes.navbarListItem}>
                <div>
                    <MessageIcon className={classes.navbarListItemIcon}/>
                    <Typography className={classes.navbarListItemLabel} variant='h6'>Сообщения</Typography>
                </div>
            </li>
            <li className={classes.navbarListItem}>
                <div>
                    <BookmarkIcon className={classes.navbarListItemIcon}/>
                    <Typography className={classes.navbarListItemLabel} variant='h6'>Закладки</Typography>
                </div>
            </li>
            <li className={classes.navbarListItem}>
                <div>
                    <ListIcon className={classes.navbarListItemIcon}/>
                    <Typography className={classes.navbarListItemLabel} variant='h6'>Список</Typography>
                </div>
            </li>
            <li className={classes.navbarListItem}>
                <div>
                    <UserIcon className={classes.navbarListItemIcon}/>
                    <Typography className={classes.navbarListItemLabel} variant='h6'>Профиль</Typography>
                </div>
            </li>
            <li className={classes.navbarListItem}>
                <Button className={classes.navbarTweetButton} variant='contained' color='primary' fullWidth>Твинуть</Button>
            </li>
        </ul>
    );
};
