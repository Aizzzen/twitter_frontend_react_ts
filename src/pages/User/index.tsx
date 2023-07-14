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
import format from "date-fns/format";
import ru from "date-fns/locale/ru";
import {selectUserData} from "../../store/ducks/user/selectors";
import Button from "@material-ui/core/Button";
import {ProfileModal} from "../../components/ProfileModal";

export const UserPage = () => {
    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading);
    const classes = useStylesHomeStyle();
    const [activeTab, setActiveTab] = useState<number>(0);
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    const userData = useSelector(selectUserData)

    useEffect(() => {
        dispatch(fetchTweets())
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
                <div className="user__info-button">
                    <Button
                        onClick={() => setVisibleModal(true)}
                        color="primary"
                        variant="contained"
                    >
                        Редактировать профиль
                    </Button>
                </div>
                <div className='user__info-names'>
                    <span className='user__info-fullname'>{userData?.profile?.fullname}</span>&nbsp;
                    <span className='user__info-username'>@{userData?.username}</span>
                </div>
                <h4 className='user__info-username'>{userData?.id}-й пользователь типоТвиттера</h4>
                <ul className='user__info-details'>
                    <li>
                        <strong>Почта: </strong>{userData?.email}
                    </li>
                    <li style={{overflowX: 'hidden'}}>
                        <strong>Обо мне: </strong>{userData?.profile?.about}
                    </li>
                    <li>
                        <strong>Местоположение: </strong>{userData?.profile?.location}
                    </li>
                    <li>
                        <strong>Сайт: </strong><a target='_blank' href={userData?.profile?.website}>{userData?.profile?.website}</a>
                    </li>
                    <li>
                        <strong>Дата регистрации: </strong>{format(new Date(userData?.date_joined), 'dd.MM.yyyy г.', { locale: ru })}
                    </li>
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
            <ProfileModal visibleModal={visibleModal} setVisibleModal={setVisibleModal}/>
        </Paper>
    );
};
