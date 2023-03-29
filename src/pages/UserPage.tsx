import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { GoBackButton } from '../components/GoBackButton';
import {useStylesHomeStyle} from "./Home/theme";

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
        </Paper>
    );
};
