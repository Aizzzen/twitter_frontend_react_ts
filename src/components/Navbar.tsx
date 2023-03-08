// @ts-nocheck

import React, {FC, ReactElement, useState} from 'react';
import {Button, IconButton, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MessageIcon from "@material-ui/icons/EmailOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListIcon from "@material-ui/icons/ListAltOutlined";
import UserIcon from "@material-ui/icons/PermIdentityOutlined";
import CreateIcon from '@material-ui/icons/Create';
import Hidden from "@material-ui/core/Hidden";
import {useStylesHomeStyle} from "../pages/Home/theme";
import {ModalWindow} from "./ModalWindow";
import {AddTweetForm} from "./AddTweetForm";

interface NavbarProps {
    classes: ReturnType<typeof useStylesHomeStyle>
}

export const Navbar: FC<NavbarProps> = ({classes}: NavbarProps): ReactElement => {
    const [visibleAddTweet, setSetVisibleAddTweet] = useState<boolean>(false);

    const handleClickOpenAddTweet = () => {
        setSetVisibleAddTweet(true)
    }

    const onCloseAddTweet = () => {
        setSetVisibleAddTweet(false)
    }

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
                    <Hidden smDown>
                        <Typography className={classes.navbarListItemLabel} variant='h6'>Поиск</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.navbarListItem}>
                <div>
                    <NotificationIcon className={classes.navbarListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.navbarListItemLabel} variant='h6'>Уведомления</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.navbarListItem}>
                <div>
                    <MessageIcon className={classes.navbarListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.navbarListItemLabel} variant='h6'>Сообщения</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.navbarListItem}>
                <div>
                    <BookmarkIcon className={classes.navbarListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.navbarListItemLabel} variant='h6'>Закладки</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.navbarListItem}>
                <div>
                    <ListIcon className={classes.navbarListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.navbarListItemLabel} variant='h6'>Список</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.navbarListItem}>
                <div>
                    <UserIcon className={classes.navbarListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.navbarListItemLabel} variant='h6'>Профиль</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.navbarListItem}>
                <Button
                    onClick={handleClickOpenAddTweet}
                    className={classes.navbarTweetButton}
                    variant='contained'
                    color='primary'
                    fullWidth
                >
                    <Hidden smDown>Твинуть</Hidden>
                    <Hidden mdUp>
                        <CreateIcon/>
                    </Hidden>
                </Button>
                <ModalWindow title={''} visible={visibleAddTweet} onClose={onCloseAddTweet}>
                    <AddTweetForm classes={classes} />
                </ModalWindow>
            </li>
        </ul>
    );
};
