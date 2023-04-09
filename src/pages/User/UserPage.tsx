import Avatar from "@material-ui/core/Avatar/Avatar";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { GoBackButton } from '../../components/GoBackButton';
import {useStylesHomeStyle} from "../Home/theme";

import './UserPage.scss'

export const UserPage = () => {
    const classes = useStylesHomeStyle();

    return (
        <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
                <GoBackButton />
                <div>
                    <Typography variant="h6">Gadamurov Yunus</Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        65 твита
                    </Typography>
                </div>
            </Paper>

            <div className="user__header"></div>
            <div className="user__info">
                <Avatar />
                <Typography>fullname</Typography>
                <Typography>username</Typography>
                <Typography>about</Typography>
                <ul>
                    <li>location</li>
                    <li>website</li>
                    <li>birth date</li>
                    <li>register date</li>
                </ul>
            </div>
        </Paper>
    );
};
