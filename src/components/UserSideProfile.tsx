import { colors } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import ArrowBottomIcon from '@material-ui/icons/KeyboardArrowDown';
import Typography from '@material-ui/core/Typography';
import React, {FC, ReactElement, useRef, useState} from 'react';
import {useStylesHomeStyle} from "../pages/Home/theme";

interface UserSideProfileProps {
    classes: ReturnType<typeof useStylesHomeStyle>;
}

export const UserSideProfile: FC<UserSideProfileProps> = ({classes}: UserSideProfileProps): ReactElement => {
    const [visiblePopup, setVisiblePopup] = useState<boolean>(false);
    const anchorRef = useRef<HTMLDivElement>();

    const handleOpenPopup = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        anchorRef.current = event.currentTarget;
        setVisiblePopup(true);
    };

    const handleClosePopup = (): void => {
        setVisiblePopup(false);
    };

    return (
        <>
            <div onClick={handleOpenPopup} className={classes.sideProfile}>
                <Avatar src="https://pbs.twimg.com/profile_images/796061890451542016/J-O1AguD_normal.jpg" />

                <div className={classes.sideProfileInfo}>
                    <b>Gadamurov Yunus</b>
                    <Typography style={{ color: colors.grey[500] }}>@gadamurrr</Typography>
                </div>
                <ArrowBottomIcon />
            </div>
            <Popover
                open={visiblePopup}
                onClose={handleClosePopup}
                anchorEl={anchorRef.current}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}>
                Здесь будет мини инфа по аккаунту
            </Popover>
        </>
    );
};
