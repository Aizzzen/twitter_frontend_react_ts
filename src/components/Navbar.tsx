// @ts-nocheck

import React, {FC, ReactElement, useState} from 'react';

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

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
import {Link} from "react-router-dom";

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
                {/*<Link to='/home'>*/}
                    <IconButton className={classes.logo} aria-label='' color='primary'>
                        <TwitterIcon className={classes.logoIcon}/>
                    </IconButton>
                {/*</Link>*/}
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
                <ModalWindow visible={visibleAddTweet} onClose={onCloseAddTweet}>
                    <div style={{ width: 550 }}>
                        <AddTweetForm maxRows={15} classes={classes} />
                    </div>
                </ModalWindow>
            </li>
        </ul>
    );
};
