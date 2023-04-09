import { colors } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ArrowBottomIcon from '@material-ui/icons/KeyboardArrowDown';
import Typography from '@material-ui/core/Typography';
import React, {FC, useState} from 'react';
import {useStylesHomeStyle} from "../pages/Home/theme";
import {useDispatch, useSelector} from "react-redux";
import {selectUserData} from "../store/ducks/user/selectors";
import Menu from "@material-ui/core/Menu";
import {Link} from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import {fetchSignOut} from "../store/ducks/user/actionCreators";

interface UserSideProfileProps {
    classes: ReturnType<typeof useStylesHomeStyle>;
}

export const UserSideProfile: FC<UserSideProfileProps> = ({classes}: UserSideProfileProps) => {
    const dispatch = useDispatch();
    const userData = useSelector(selectUserData)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpenPopup = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopup = (): void => {
        setAnchorEl(null);
    };

    const handleSignOut = () => {
        window.localStorage.removeItem('Bearer')
        dispatch(fetchSignOut())
    };

    if (!userData) {
        return null
    }

    return (
        <>
            <div onClick={handleOpenPopup} className={classes.sideProfile}>
                <Avatar src='' />
                <div className={classes.sideProfileInfo}>
                    {/*<b>{userData.fullname ? userData.fullname : 'fullname'}</b>*/}
                    <Typography style={{ color: colors.grey[500] }}>@{userData.username}</Typography>
                </div>
                <ArrowBottomIcon />
            </div>
            <Menu
                classes={{
                    paper: classes.profileMenu,
            }}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClosePopup}
                keepMounted>
                <Link to={`/user/${userData.username}`}>
                    <MenuItem onClick={handleClosePopup}>Мой профиль</MenuItem>
                </Link>
                <MenuItem onClick={handleSignOut}>Выйти</MenuItem>
            </Menu>
        </>
    );
};
