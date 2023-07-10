import Avatar from "@material-ui/core/Avatar/Avatar";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React, {useEffect, useState} from 'react';
import { GoBackButton } from '../../components/GoBackButton';
import {useStylesHomeStyle} from "../Home/theme";

import './UserPage.scss'
import {Tab, Tabs} from "@material-ui/core";
import classnames from "classnames";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useDispatch, useSelector} from "react-redux";
import {selectIsTweetsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors";
import {TweetItem} from "../../components/TweetItem";
import {fetchTweets} from "../../store/ducks/tweets/actionCreators";
import {UserApi} from "../../services/api/usersApi";
import format from "date-fns/format";
import ru from "date-fns/locale/ru";

export const UserPage = () => {
    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading);
    const classes = useStylesHomeStyle();
    const [activeTab, setActiveTab] = useState<number>(0);
    const [userData, setUserData] = useState<any | undefined>(); // useState<User | undefined>

    useEffect(() => {
        dispatch(fetchTweets())
        // const id_or_username = window.location.pathname.split("/").pop()
        const pathname = window.location.pathname
        const user = pathname.includes('/user')
        if(user) {
            UserApi.getCurrentUserData().then(({data}) => {
                setUserData(data)
            })
        }
        // dispatch(fetchTags())
    }, [dispatch])

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <Paper className={classnames(classes.tweetsWrapper, 'user')} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
                <GoBackButton />
                <div>
                    <Typography variant="h6" style={{fontWeight: 500}}>{userData?.profile?.fullname}</Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        твитов {tweets.length}
                    </Typography>
                </div>
            </Paper>

            <div className="user__header"></div>
            <div className="user__info">
                <Avatar />
                {/* <h2 className='user__info-fullname'>{userData?.username}</h2> */}
                <span>
                    {userData?.profile?.fullname}
                    @{userData?.username}
                    {/* <h2 className='user__info-fullname'>{userData?.profile?.fullname}</h2>
                    <h4 className='user__info-username'>@{userData?.username}</h4> */}
                </span>
                <h4 className='user__info-username'>{userData?.id}-й пользователь типоТвиттера</h4>
                <p className='user__info-description'>{userData?.email}</p>
                <p className='user__info-description'>{userData?.profile?.about}</p>
                <ul className='user__info-details'>
                    <li>{userData?.profile?.location}</li>
                    <li>
                        <a target='_blank' href={userData?.profile?.website}>{userData?.profile?.website}</a>
                    </li>
                    {/* <li>Дата регистрации:
                        <span> {format(new Date(userData?.date_joined), 'dd.MM.yyyy г.', { locale: ru })}</span>
                    </li> */}
                    {/*<li>Дата регистрации: {userData?.data_joined}</li>*/}
                </ul>
            </div>
            <Tabs value={activeTab} indicatorColor="primary" textColor="primary" onChange={handleChange}>
                <Tab label="Твиты" />
                <Tab label="Твиты и ответы" />
                <Tab label="Медиа" />
                <Tab label="Нравится" />
            </Tabs>
            <div className="user__tweets">
                {isLoading ? (
                    <div className={classes.tweetsCentred}>
                        <CircularProgress />
                    </div>
                ) : (
                    tweets.map((tweet) => (
                        <TweetItem key={tweet.id} classes={classes} photos={tweet.photos} {...tweet} />
                    ))
                )}
            </div>
        </Paper>
    );
};
