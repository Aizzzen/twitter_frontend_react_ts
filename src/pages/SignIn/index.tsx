import React, {FC, ReactElement, useState} from 'react';

import {makeStyles, Theme} from "@material-ui/core";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';

import {LoginModal} from "./components/LoginModal";
import {RegisterModal} from "./components/RegisterModal";
import {FullRegisterModal} from "./components/FullRegisterModal";

export const useStylesSignIn = makeStyles((theme: Theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    infoPart: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        overflow: 'hidden',
        position: 'relative'
    },
    infoPartBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '53%',
        transform: 'translate(-50%, -50%)',
        width: '260%',
        height: '260%',
    },
    infoPartList: {
        position: 'relative',
        width: 380,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 20
        }
    },
    infoPartListItem: {
        marginBottom: 40
    },
    infoPartListIcons: {
        fontSize: 32,
        marginRight: 15
    },
    loginPart: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
    },
    loginTwitterIcon: {
        fontSize: 45,
    },
    loginPartWrapper: {
        width: 380
    },
    loginPartTitle: {
        marginTop: 20,
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 60
    },
    loginPartField: {
        marginBottom: 18,
    },
    registerField: {
        marginBottom: theme.spacing(5),
    },
    loginFormControl: {
        marginBottom: theme.spacing(2),
    },

}))

export const SignIn: FC = (): ReactElement => {
    const classes = useStylesSignIn();
    const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp' | 'signUpFull'>();

    const handleClickOpenSignIn = (): void => setVisibleModal('signIn');

    const handleClickOpenSignUp = (): void => setVisibleModal('signUp');

    const handleClickOpenSignUpFull = (): void => setVisibleModal('signUpFull');

    const handleCloseModal = (): void => setVisibleModal(undefined);


    return (
        <div className={classes.wrapper}>
            <section className={classes.infoPart}>
                <TwitterIcon color='primary' className={classes.infoPartBigIcon}/>
                <ul className={classes.infoPartList}>
                    <li className={classes.infoPartListItem}>
                        <Typography variant='h6'>
                            <SearchIcon className={classes.infoPartListIcons}/>
                            Читайте о том, что вам интересно.
                        </Typography>
                    </li>
                    <li className={classes.infoPartListItem}>
                        <Typography variant='h6'>
                            <PeopleIcon className={classes.infoPartListIcons}/>
                            Узнайте, о чем говорят в мире.
                        </Typography>
                    </li>
                    <li className={classes.infoPartListItem}>
                        <Typography variant='h6'>
                            <MessageIcon className={classes.infoPartListIcons}/>
                            Присоединяйтесь к общению.
                        </Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginPart}>
                <div className={classes.loginPartWrapper}>
                    <TwitterIcon color='primary' className={classes.loginTwitterIcon}/>
                    <Typography className={classes.loginPartTitle} gutterBottom variant='h4'>
                        Узнайте, что происходит в мире прямо сейчас
                    </Typography>
                    <Typography>
                        <b>Присоединяйтесь к типоТвиттеру прямо сейчас!</b>
                    </Typography><br/>
                    <Button
                        onClick={handleClickOpenSignUp}
                        style={{ marginBottom: 20 }}
                        variant='contained'
                        color='primary'
                        fullWidth
                    >
                        Быстрая регистрация
                    </Button>
                    <Button
                        onClick={handleClickOpenSignUpFull}
                        style={{ marginBottom: 20 }}
                        variant='contained'
                        color='primary'
                        fullWidth
                    >
                        Полная регистрация
                    </Button>
                    <Button
                        onClick={handleClickOpenSignIn}
                        variant='outlined'
                        color='primary'
                        fullWidth
                    >
                        Войти
                    </Button>
                    <LoginModal open={visibleModal === 'signIn'} onClose={handleCloseModal}/>
                    <RegisterModal open={visibleModal === 'signUp'} onClose={handleCloseModal}/>
                    <FullRegisterModal open={visibleModal === 'signUpFull'} onClose={handleCloseModal}/>
                </div>
            </section>
        </div>
    );
};
