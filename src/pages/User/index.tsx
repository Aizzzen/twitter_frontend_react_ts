import Avatar from "@material-ui/core/Avatar/Avatar";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { GoBackButton } from '../../components/GoBackButton';
import {useStylesHomeStyle} from "../Home/theme";

import './UserPage.scss'
import {Tab, Tabs} from "@material-ui/core";

export const UserPage = () => {
    const classes = useStylesHomeStyle();
    // const isLoading = useSelector(selectIsTweetsLoading);
    const [activeTab, setActiveTab] = React.useState<number>(0);
    // const [userData, setUserData] = React.useState<User | undefined>();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setActiveTab(newValue);
    };

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
                <h2 className='user__info-fullname'>Gadamurov Yunus</h2>
                <h4 className='user__info-username'>@gadamurrr</h4>
                <p className='user__info-description'>Frontend (React) & Backend (Django)</p>
                <ul className='user__info-details'>
                    <li>Russia, Grozny</li>
                    <li><a target='_blank' href="https://career.habr.com/aizzzen">habr</a></li>
                    <li>Дата рождения: 18.06.2002</li>
                    <li>Дата регистрации: 09.04.2023</li>
                </ul>
            </div>
            <Tabs value={activeTab} indicatorColor="primary" textColor="primary" onChange={handleChange}>
                <Tab label="Твиты" />
                <Tab label="Медиа" />
                <Tab label="Нравится" />
            </Tabs>
        </Paper>
    );
};
