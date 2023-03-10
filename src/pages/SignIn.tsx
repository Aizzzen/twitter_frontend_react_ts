import React, {FC, ReactElement, useState} from 'react';

import {makeStyles, Theme} from "@material-ui/core";

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';

import {ModalWindow} from "../components/ModalWindow";

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
    const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>();

    const handleClickOpenSignIn = (): void => setVisibleModal('signIn');

    const handleClickOpenSignUp = (): void => setVisibleModal('signUp');

    const handleCloseModal = (): void => setVisibleModal(undefined);


    return (
        <div className={classes.wrapper}>
            <section className={classes.infoPart}>
                <TwitterIcon color='primary' className={classes.infoPartBigIcon}/>
                <ul className={classes.infoPartList}>
                    <li className={classes.infoPartListItem}>
                        <Typography variant='h6'>
                            <SearchIcon className={classes.infoPartListIcons}/>
                            ?????????????? ?? ??????, ?????? ?????? ??????????????????.
                        </Typography>
                    </li>
                    <li className={classes.infoPartListItem}>
                        <Typography variant='h6'>
                            <PeopleIcon className={classes.infoPartListIcons}/>
                            ??????????????, ?? ?????? ?????????????? ?? ????????.
                        </Typography>
                    </li>
                    <li className={classes.infoPartListItem}>
                        <Typography variant='h6'>
                            <MessageIcon className={classes.infoPartListIcons}/>
                            ?????????????????????????????? ?? ??????????????.
                        </Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginPart}>
                <div className={classes.loginPartWrapper}>
                    <TwitterIcon color='primary' className={classes.loginTwitterIcon}/>
                    <Typography className={classes.loginPartTitle} gutterBottom variant='h4'>
                        ??????????????, ?????? ???????????????????? ?? ???????? ?????????? ????????????
                    </Typography>
                    <Typography>
                        <b>?????????????????????????????? ?? ???????????????? ?????????? ????????????!</b>
                    </Typography><br/>
                    <Button
                        onClick={handleClickOpenSignUp}
                        style={{ marginBottom: 20 }}
                        variant='contained'
                        color='primary'
                        fullWidth
                    >
                        ????????????????????????????????????
                    </Button>
                    <Button
                        onClick={handleClickOpenSignIn}
                        variant='outlined'
                        color='primary'
                        fullWidth
                    >
                        ??????????
                    </Button>
                    {/*MODAL WINDOW*/}
                    <ModalWindow
                        visible={visibleModal === 'signIn'}
                        onClose={handleCloseModal}
                        title='?????????? ?? ??????????????'
                        classes={classes}
                    >
                        <FormControl
                            className={classes.loginFormControl}
                            component="fieldset"
                            fullWidth
                        >
                            <FormGroup aria-label="position" row>
                                <TextField
                                    className={classes.loginPartField}
                                    autoFocus
                                    id="email"
                                    label="E-Mail"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.loginPartField}
                                    autoFocus
                                    id="password"
                                    label="????????????"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                />
                                <Button
                                    onClick={handleCloseModal}
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    ??????????
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalWindow>
                    <ModalWindow
                        visible={visibleModal === 'signUp'}
                        onClose={handleCloseModal}
                        classes={classes}
                        title="???????????????? ?????????????? ????????????">
                        <FormControl
                            className={classes.loginFormControl}
                            component="fieldset"
                            fullWidth
                        >
                            <FormGroup aria-label="position" row>
                                <TextField
                                    className={classes.registerField}
                                    autoFocus
                                    id="name"
                                    label="??????"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="name"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.registerField}
                                    autoFocus
                                    id="email"
                                    label="E-Mail"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.registerField}
                                    autoFocus
                                    id="password"
                                    label="????????????"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                />
                                <Button variant="contained" color="primary" fullWidth>
                                    ??????????
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalWindow>
                </div>
            </section>
        </div>
    );
};
