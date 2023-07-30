import React, {useEffect} from 'react';
import Paper from "@material-ui/core/Paper";
import {useStylesHomeStyle} from "../Home/theme";
import Typography from "@material-ui/core/Typography";
import {ChatList} from "../../components/ChatList";
import {useDispatch} from "react-redux";
import {fetchChats} from "../../store/ducks/chats/actionCreators";

export const ChatsPage = () => {
    const classes = useStylesHomeStyle();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchChats())
    }, [dispatch])

    return (
        <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant='outlined'>
                <Typography variant='h6'>типоЧаты</Typography>
            </Paper>
            <ChatList/>
        </Paper>
        );
};
